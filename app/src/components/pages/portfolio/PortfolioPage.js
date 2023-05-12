import { useState } from 'react';
import Header from '../../shared/Header';


export default function PortfolioPage() {
    const page = 'portfolio';

    return <>
    <Header page={page}/>
    <div height="90%">projects stuff</div>
    </>
};