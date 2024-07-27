document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#container");

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeGrid() {
        const gridNum = parseInt(prompt("Enter a number up to 100 determining the size of your square grid: "), 10);
        container.textContent = ""; // Clear existing grid
        const gridPercent = 100 / gridNum;

        for (let i = 0; i < gridNum; i++) {
            const row = document.createElement("div");
            row.className = "row";
            row.style.cssText = `display: flex;`;

            for (let j = 0; j < gridNum; j++) {
                const column = document.createElement("div");
                column.className = "column";
                column.style.cssText = `height: ${gridPercent}vw; width: ${gridPercent}vw; background-color: white;`;
                
                // Add hover effect for random color
                column.addEventListener('mouseover', () => {
                    column.style.backgroundColor = getRandomColor();
                });

                // Add mouseleave effect to revert back to white
                column.addEventListener('mouseleave', () => {
                    column.style.backgroundColor = 'white';
                });

                row.appendChild(column);
            }
            container.appendChild(row);
        }
    }

    const button = document.querySelector("button");
    button.addEventListener("click", changeGrid);

    changeGrid(); // Initial grid creation
});
