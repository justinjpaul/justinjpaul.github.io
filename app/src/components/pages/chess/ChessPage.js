import { useState } from 'react';
import Header from '../../shared/Header';


export default function ChessPage() {
    const page = 'chess';

    return <>
    <Header page={page}/>
    <div height="90vh">chess stuff</div>
    </>
};