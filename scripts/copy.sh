rm -rf src/contracts &&
mkdir -p src/contracts/oswap-openswap-contract &&
mkdir -p src/contracts/oswap-oracle-adaptor-contract &&
mkdir -p src/contracts/oswap-chainlink-contract &&
mkdir -p src/contracts/scom-commission-proxy-contract &&
cp -r node_modules/@scom/oswap-openswap-contract/src/* src/contracts/oswap-openswap-contract &&
cp -r node_modules/@scom/oswap-oracle-adaptor-contract/src/* src/contracts/oswap-oracle-adaptor-contract &&
cp -r node_modules/@scom/oswap-chainlink-contract/src/* src/contracts/oswap-chainlink-contract &&
cp -r node_modules/@scom/scom-commission-proxy-contract/src/* src/contracts/scom-commission-proxy-contract &&
mkdir -p src/scom-network-picker &&
cp -r node_modules/@scom/scom-network-picker/src/* src/scom-network-picker &&
cp -r src/scom-network-picker/img/* src/img &&
rm -rf src/scom-network-picker/img