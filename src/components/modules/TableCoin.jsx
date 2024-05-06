//Spinner loader
import { RotatingLines } from "react-loader-spinner";

//Styles
import styles from "./TableCoin.module.css"

//Component
import TableRow from "./TableRow";

const TableCoin = ({ coins, isLoading, setChart }) => {

    return (
        <div className={styles.container}>
            {isLoading ? (<RotatingLines className={styles.spinner} strokeWidth="2" strokeColor="var(--primary-color)" />) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                            <th>Chart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map(coin =>
                            <TableRow coin={coin} key={coin.id} setChart={setChart} />
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TableCoin;

