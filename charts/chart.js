class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.areaCtx = document.getElementById('areaChart');
        this.barCtx = document.getElementById('barChart');
    }

    async init() {
        const data = await this.fetchData();
        if (data) {
            this.createAreaChart(data);
            this.createBarChart(data);
        }
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    createAreaChart(data) {
        new Chart(this.areaCtx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '# of Votes',
                    data: data.data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
            
        });
    }

    createBarChart(data) {
        new Chart(this.barCtx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '# of Votes',
                    data: data.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
       
}

const chartCreator = new ChartCreator('data.json');
chartCreator.init();
console.log(chartCreator.dataUrl);