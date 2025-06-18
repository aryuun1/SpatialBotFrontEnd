    Detect the Price Discrepancy:

        The bot constantly monitors ARB/ETH prices on both Uniswap and SushiSwap.

        It sees that ARB is cheaper on Uniswap and more expensive on SushiSwap.

    Execute Arbitrage Trade:

        It buys ARB on Uniswap at 0.00042 ETH

        It sells ARB on SushiSwap at 0.00044 ETH

        For every ARB token traded, it profits 0.00002 ETH

    Repeat Quickly and at Scale:

        The bot repeats this across thousands of tokens or with higher volume.

        Often it uses flash loans to borrow ETH, execute arbitrage, and repay—all in one transaction (zero upfront capital).

📉 Realistic Considerations

    Gas Fees (on Ethereum) can eat into arbitrage profits.

    Slippage must be managed.

    Latency matters — other bots may be competing.

    MEV (miner/maximal extractable value) bots might front-run your transaction.

✅ TL;DR

A spatial arbitrage bot on ARB/ETH:

    Buys ARB on the cheaper DEX (e.g., Uniswap)

    Sells ARB on the costlier DEX (e.g., SushiSwap)

    Profits from ETH difference (Δ price × amount)

    All done automatically, often using flash loans