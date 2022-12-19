import React from 'react';

function ManajemenBuku({
    bookList
}) {

    console.log(bookList);
    // data 

    // event handler
    return (
        <div className='container-fluid mt-3'>
            <h1 className='text-center'>Ini Adalah Manajemen Buku</h1>
            <div id='formTambah'></div>
            <div id='formUbah'></div>
            <div id='daftarBuku'></div>
        </div>
    )
}

export default ManajemenBuku; 