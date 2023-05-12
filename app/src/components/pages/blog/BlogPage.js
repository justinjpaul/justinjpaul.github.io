import { useState } from 'react';
import Header from '../../shared/Header';


export default function BlogPage() {
    const page = 'blog';

    return <>
    <Header page={page}/>
    <div height="90%">blog stuff</div>
    </>
};