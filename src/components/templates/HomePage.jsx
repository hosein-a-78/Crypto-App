//Uses
import { useEffect, useState } from "react";

//Component
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Chart from "../modules/Chart";

//Api
import { getCoinList } from "../../services/cryptoApi";
import Search from "../modules/Search";

const HomePage = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState("usd");
    const [chart, setChart] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        const getDAta = async () => {
            try {
                const res = await fetch(getCoinList(page, currency));
                const json = await res.json();
                setCoins(json);
                setIsLoading(false);
            } catch (error) {
                alert("this is error")
            }
        }
        getDAta();

    }, [page, currency])
    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
            <Pagination page={page} setPage={setPage} />
            {
                !!chart && <Chart chart={chart} setChart={setChart} />
            }
        </div>
    );
};

export default HomePage; 