import { AuthContext } from "@context/auth";
import gg from "@contracts/GlyphGraph.json";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function WalletProvider({ children }) {
    const [auth, setAuth] = useState()
    const [, setAccountAddr] = useState("");
    const [, setProvider] = useState(null);
    const location = useLocation()

    useEffect(() => {
        const getProvider = async () => {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (chainId !== '0x33') {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x33' }],
                })
            }
            const _provider = new ethers.BrowserProvider(window.ethereum);
            setProvider(_provider);
            if (_provider) {
                const signer = await _provider.getSigner();
                console.log(signer);
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                })
                setAccountAddr(accounts[0]);
                setAuth({
                    accountAddr: accounts[0],
                    contract: new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, gg.abi, signer),
                    provider: _provider
                })
            }
        }
        getProvider();
    }, [])

    const connectToWallet = async () => {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x33') {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x33' }],
            })
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
        setAccountAddr(accounts[0]);
    }

    useEffect(() => {
        if(!auth && location.pathname !== "/") {
            connectToWallet()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth, connectToWallet }}>
            {children}
        </AuthContext.Provider>
    )
}