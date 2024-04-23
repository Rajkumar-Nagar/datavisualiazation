import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 800;
        const height = 600;


        const margin = { top: 30, right: 30, bottom: 70, left: 70 };
        const countries = data.reduce((acc, cur) => {
            if (!acc[cur.country]) {
                acc[cur.country] = 0;
            }
            acc[cur.country]++;
            return acc;
        }, {});


        
        const countryData = Object.entries(countries).map(([country, count]) => ({
            country,
            count,
        }));


        const xScale = d3
            .scaleBand()
            .domain(countryData.map((d) => d.country))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(countryData, (d) => d.count)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = (g) =>
            g
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(xScale).tickSizeOuter(0))
                .selectAll('text')
                .attr('dy', '.35em')
                .attr('transform', 'rotate(-45)')
                .style('text-anchor', 'end');

        const yAxis = (g) =>
            g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(yScale).ticks(null, 's'));

        svg.selectAll('.bar')
            .data(countryData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => xScale(d.country))
            .attr('y', (d) => yScale(d.count))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => height - margin.bottom - yScale(d.count))
            .attr('fill', 'steelblue');

        svg.append('g').call(xAxis);
        svg.append('g').call(yAxis);

        // Add x-axis label
        svg.append('text')
            .attr('transform', `translate(${width / 2},${height - margin.bottom / 2 + 20})`)
            .style('text-anchor', 'middle')
            .text('Country');

        // Add y-axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', margin.left / 2)
            .attr('x', 0 - height / 2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text('Count');
    }, [data]);

    return <svg ref={svgRef} width={800} height={600} />;
};

export default BarChart;
