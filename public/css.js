(function () {
    window.onload = () => {
        window
            .fetch(
                'http://localhost:5000/api/styles/getconfig?spaceid=123ABC&isPreview=false'
            )
            .then((response) => response.json())
            .then((data) => {
                let myStringOfstyles = '';

                if (
                    Array.isArray(data.styleConfig.styles) &&
                    data.styleConfig.styles.length
                ) {
                    data.styleConfig.styles.forEach((rule) => {
                        myStringOfstyles += `${rule.element} { ${rule.styles
                            .map((styleStr) => {
                                return `${styleStr} !important; `;
                            })
                            .join(' ')} } `;
                    });
                }

                const head =
                        document.head ||
                        document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

                head.appendChild(style);
                style.type = 'text/css';
                style.appendChild(document.createTextNode(myStringOfstyles));
            });
    };
})();
