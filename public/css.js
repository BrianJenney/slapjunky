(function () {
    window.onload = () => {
        window
            .fetch('./css.json')
            .then((response) => response.json())
            .then((data) => {
                let myStringOfstyles = '';

                if (Array.isArray(data.rules) && data.rules.length) {
                    data.rules.forEach((rule) => {
                        myStringOfstyles += `${
                            rule.target.element
                        } { ${rule.target.styles
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
