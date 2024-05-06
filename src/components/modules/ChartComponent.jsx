import { CartesianGrid, LineChart, ResponsiveContainer, Line, YAxis, XAxis, Legend, Tooltip } from "recharts";


const ChartComponent = ({ data, type }) => {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey={type} stroke="var(--primary-color)" strokeWidth="2px" />
                    <CartesianGrid stroke="var(--color-border)" />
                    <YAxis dataKey={type} domain={["auto", "auto"]} />
                    <XAxis dataKey="date" hide />
                    <Legend />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default ChartComponent;