import React, { useMemo } from "react";
import Page from "../../components/Page";
import HomeImage from "../../assets/img/MShare.jpg";
import CashImage from "../../assets/img/poseidon.svg";
import Image from "material-ui-image";
import { createGlobalStyle } from "styled-components";
import CountUp from "react-countup";
import CardIcon from "../../components/CardIcon";
import TokenSymbol from "../../components/TokenSymbol";
import useTombStats from "../../hooks/useTombStats";
import useLpStats from "../../hooks/useLpStats";
import useModal from "../../hooks/useModal";
import useZap from "../../hooks/useZap";
import useBondStats from "../../hooks/useBondStats";
import usetShareStats from "../../hooks/usetShareStats";
import useTotalValueLocked from "../../hooks/useTotalValueLocked";
import {
  tomb as tombTesting,
  tShare as tShareTesting,
} from "../../tomb-finance/deployments/deployments.testing.json";
import {
  tomb as tombProd,
  tShare as tShareProd,
} from "../../tomb-finance/deployments/deployments.mainnet.json";

import MetamaskFox from "../../assets/img/metamask-fox.svg";

import { Box, Button, Card, CardContent, Grid, Paper } from "@material-ui/core";
import ZapModal from "../Bank/components/ZapModal";

import { makeStyles } from "@material-ui/core/styles";
import useTombFinance from "../../hooks/useTombFinance";

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down("415")]: {
      marginTop: "10px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats("MBird-POS-LP");
  const tShareFtmLpStats = useLpStats("MShare-POS-LP");
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress =
    "https://spookyswap.finance/swap?outputCurrency=" + tomb.address;
  const buyTShareAddress =
    "https://spookyswap.finance/swap?outputCurrency=" + tShare.address;

  const tombLPStats = useMemo(
    () => (tombFtmLpStats ? tombFtmLpStats : null),
    [tombFtmLpStats]
  );
  const tshareLPStats = useMemo(
    () => (tShareFtmLpStats ? tShareFtmLpStats : null),
    [tShareFtmLpStats]
  );
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats]
  );
  const tombPriceInFTM = useMemo(
    () => (tombStats ? Number(tombStats.tokenInFtm).toFixed(2) : null),
    [tombStats]
  );
  const tombCirculatingSupply = useMemo(
    () => (tombStats ? String(tombStats.circulatingSupply) : null),
    [tombStats]
  );
  const tombTotalSupply = useMemo(
    () => (tombStats ? String(tombStats.totalSupply) : null),
    [tombStats]
  );

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats]
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(2) : null),
    [tShareStats]
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats]
  );
  const tShareTotalSupply = useMemo(
    () => (tShareStats ? String(tShareStats.totalSupply) : null),
    [tShareStats]
  );

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats]
  );
  const tBondPriceInFTM = useMemo(
    () => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(2) : null),
    [tBondStats]
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats]
  );
  const tBondTotalSupply = useMemo(
    () => (tBondStats ? String(tBondStats.totalSupply) : null),
    [tBondStats]
  );

  const tombLpZap = useZap({ depositTokenName: "MBird-POS-LP" });
  const tshareLpZap = useZap({ depositTokenName: "MShare-POS-LP" });

  const [onPresentTombZap, onDissmissTombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTombZap();
      }}
      tokenName={"MShare-POS-LP"}
    />
  );

  const [onPresentTshareZap, onDissmissTshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTshareZap();
      }}
      tokenName={"MShare-POS-LP"}
    />
  );

  return (
    <Page>
      <BackgroundImage />
      <Grid container spacing={3}>
        {/* Logo */}
        <Grid container item xs={12} sm={4} justify="center">
          {/* <Paper>xs=6 sm=3</Paper> */}
          <Image
            color="none"
            style={{ width: "300px", paddingTop: "0px" }}
            src={CashImage}
          />
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={4}>
              <h2>Welcome to Mockingbird</h2>
              <p>
                An algorithmic stablecoin on Fantom Opera, pegged to the price
                of 1 POS via seigniorage.
              </p>
              <p>
                Stake your MSHARE in the Masonry to earn inflationary MBIRD
                rewards or provide liquidity on pairs and start earning today!
              </p>
            </Box>
          </Paper>
        </Grid>

        {/* TVL */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <h2>Total Value Locked</h2>
              <CountUp
                style={{ fontSize: "25px" }}
                end={TVL}
                separator=","
                prefix="$"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} sm={8}>
          <Card style={{ height: "100%" }}>
            <CardContent align="center" style={{ marginTop: "2.5%" }}>
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              <Button
                color="primary"
                href="/masonry"
                variant="contained"
                style={{ marginRight: "10px" }}
              >
                Stake Now
              </Button>
              <Button
                href="/cemetery"
                variant="contained"
                className={classes.button}
                style={{ marginRight: "10px" }}
              >
                Farm Now
              </Button>
              <Button
                color="primary"
                target="_blank"
                href={buyTombAddress}
                variant="contained"
                style={{ marginRight: "10px" }}
              >
                Buy MBIRD
              </Button>
              <Button
                variant="contained"
                target="_blank"
                href={buyTShareAddress}
                className={classes.button}
              >
                Buy MSHARE
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* TOMB */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: "relative" }}>
              <h2>MBIRD</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask("MBird");
                }}
                color="primary"
                variant="outlined"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                +&nbsp;
                <img
                  alt="metamask fox"
                  style={{ width: "20px" }}
                  src={MetamaskFox}
                />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="MBird" />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: "30px" }}>
                  {tombPriceInFTM ? tombPriceInFTM : "-.--"} POS
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: "16px", alignContent: "flex-start" }}>
                  ${tombPriceInDollars ? tombPriceInDollars : "-.--"}
                </span>
              </Box>
              <span style={{ fontSize: "12px" }}>
                Market Cap: $
                {(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />
                Circulating Supply: {tombCirculatingSupply} <br />
                Total Supply: {tombTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* TSHARE */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: "relative" }}>
              <h2>MSHARE</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask("MShare");
                }}
                color="primary"
                variant="outlined"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                +&nbsp;
                <img
                  alt="metamask fox"
                  style={{ width: "20px" }}
                  src={MetamaskFox}
                />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="MShare" />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: "30px" }}>
                  {tSharePriceInFTM ? tSharePriceInFTM : "-.--"} POS
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: "16px" }}>
                  ${tSharePriceInDollars ? tSharePriceInDollars : "-.--"}
                </span>
              </Box>
              <span style={{ fontSize: "12px" }}>
                Market Cap: $
                {(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)}{" "}
                <br />
                Circulating Supply: {tShareCirculatingSupply} <br />
                Total Supply: {tShareTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* TBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: "relative" }}>
              <h2>MBOND</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask("Mbond");
                }}
                color="primary"
                variant="outlined"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                +&nbsp;
                <img
                  alt="metamask fox"
                  style={{ width: "20px" }}
                  src={MetamaskFox}
                />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="MShare" />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: "30px" }}>
                  {tBondPriceInFTM ? tBondPriceInFTM : "-.--"} POS
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: "16px" }}>
                  ${tBondPriceInDollars ? tBondPriceInDollars : "-.--"}
                </span>
              </Box>
              <span style={{ fontSize: "12px" }}>
                Market Cap: $
                {(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)}{" "}
                <br />
                Circulating Supply: {tBondCirculatingSupply} <br />
                Total Supply: {tBondTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>MBIRD-POS Spooky LP</h2>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="MBird-POS-LP" />
                </CardIcon>
              </Box>
              <Box mt={2}>
                <Button
                  color="primary"
                  onClick={onPresentTombZap}
                  variant="contained"
                >
                  Zap In
                </Button>
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: "26px" }}>
                  {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : "-.--"}{" "}
                  MBird /{" "}
                  {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : "-.--"} POS
                </span>
              </Box>
              <Box>
                ${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : "-.--"}
              </Box>
              <span style={{ fontSize: "12px" }}>
                Liquidity: $
                {tombLPStats?.totalLiquidity
                  ? tombLPStats.totalLiquidity
                  : "-.--"}{" "}
                <br />
                Total supply:{" "}
                {tombLPStats?.totalSupply ? tombLPStats.totalSupply : "-.--"}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>MSHARE-POS Spooky LP</h2>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="MShare-POS-LP" />
                </CardIcon>
              </Box>
              <Box mt={2}>
                <Button
                  color="primary"
                  onClick={onPresentTshareZap}
                  variant="contained"
                >
                  Zap In
                </Button>
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: "26px" }}>
                  {tshareLPStats?.tokenAmount
                    ? tshareLPStats?.tokenAmount
                    : "-.--"}{" "}
                  MShare /{" "}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : "-.--"}{" "}
                  POS
                </span>
              </Box>
              <Box>
                ${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : "-.--"}
              </Box>
              <span style={{ fontSize: "12px" }}>
                Liquidity: $
                {tshareLPStats?.totalLiquidity
                  ? tshareLPStats.totalLiquidity
                  : "-.--"}
                <br />
                Total supply:{" "}
                {tshareLPStats?.totalSupply
                  ? tshareLPStats.totalSupply
                  : "-.--"}
              </span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
