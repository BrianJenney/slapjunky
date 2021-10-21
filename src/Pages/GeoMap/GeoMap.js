import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import * as d3 from 'd3';
import { json } from './states';
import { apiClient } from '../../utils/apiClient';

const GeoMap = () => {
    const history = useHistory();
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await apiClient(
                'artist/regionalData',
                {},
                {
                    method: 'GET',
                }
            );
            setMusicData(res.data.data);
        };
        fetchData();
    }, []);

    const mapRef = useRef();
    const width = 1145;
    const height = 641;

    const renderChart = useCallback(
        (nyc, path) => {
            // D3 Projection
            const projection = d3
                .geoAlbersUsa()
                .translate([width / 2, height / 2])
                .scale(1425);

            // Define path generator
            const geoPath = d3.geoPath().projection(projection);

            const div = d3
                .select('body')
                .append('div')
                .attr('class', 'tooltip')
                .style('opacity', 0);

            //Create SVG element and append map to the SVG
            const svg = d3
                .select(mapRef.current)
                .attr('width', width)
                .attr('height', height)
                .attr('viewBox', '0 0 ' + width + ' ' + height)
                .attr('preserveAspectRatio', 'xMidYMid meet');

            // Load GeoJSON data and merge with states data

            // Bind the data to the SVG and create one path per GeoJSON feature
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', geoPath)
                .style('stroke', '#fff')
                .style('stroke-width', '1')
                .style('fill', 'rgb(213,222,217)');

            svg.selectAll('circle')
                .data(musicData)
                .enter()
                .append('circle')
                .attr('cx', (d) => {
                    return projection([d.lng, d.lat])[0];
                })
                .attr('cy', (d) => {
                    return projection([d.lng, d.lat])[1];
                })
                .attr('r', (d) => {
                    return Math.sqrt(d.count) * 10;
                })
                .style('fill', 'rgb(217,91,67)')
                .style('opacity', 0.85)
                .on('mouseover', (event, d) => {
                    div.transition().duration(200).style('opacity', 0.9);

                    div.html(d._id.city + ' ' + d._id.state)
                        .style('left', event.pageX + 'px')
                        .style('top', event.pageY - 28 + 'px');
                })
                .on('mouseout', (d) => {
                    div.transition()
                        .duration(500)
                        .style('opacity', 0)
                        .style('position', 'absolute')
                        .style('text-align', 'center')
                        .style('width', '60px')
                        .style('height', '28px')
                        .style('padding', '2px')
                        .style('font', '12px sans-serif')
                        .style('background', 'white')
                        .style('border', '0px')
                        .style('border-radius', '8px')
                        .style('pointer-events', 'none');
                })
                .on('click', (evt, d) => {
                    div.style('display', 'none');
                    history.push(
                        `/music?cityState=${d._id.city},${d._id.state}`
                    );
                });
        },
        [mapRef, height, width, musicData, history]
    );

    useEffect(() => {
        renderChart();
    }, [mapRef, renderChart]);

    return (
        <div className="flex">
            <svg style={{ margin: 'auto' }} id="map" ref={mapRef}></svg>
        </div>
    );
};

export default GeoMap;
