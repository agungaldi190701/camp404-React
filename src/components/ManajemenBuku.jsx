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
            <div id='daftarBuku'>
                <div className='card'>
                    <div className='card-header'>
                        <h3 className='card-title'>Daftar Buku</h3>
                    </div>
                    <div className='card-body'>
                        <button className='btn btn-sm btn-primary mx-2'>Tambah +</button>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Pengarang</th>
                                    <th scope="col">Penerbit</th>
                                    <th scope="col">Tahun</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookList.map((buku, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{buku.judul}</td>
                                        <td>{buku.pengarang}</td>
                                        <td>{buku.penerbit}</td>
                                        <td>{buku.tahun}</td>
                                        <td>
                                            <button className='btn btn-sm btn-warning mx-2'>Ubah</button>
                                            <button className='btn btn-sm btn-danger'>Hapus</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='card-footer'></div>
                </div>

            </div>
        </div>
    )
}

export default ManajemenBuku; 