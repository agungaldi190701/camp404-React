import React from 'react';

function ManajemenBuku({
    bookList
}) {

    console.log(bookList);
    // data 

    // event handler
    return (
        <div className='container-fluid mt-3'>
            <h1 className='text-center'>Manajemen Buku</h1>
            <br></br>
            <div id='formTambah'>
                <div className='card'>
                    <div className='card-header bg-primary text-white'>
                        <h5 className='card-title '>Tambah Buku</h5>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">

                                    <input type="text" id="judul" className="form-control" name='judul' placeholder='Judul...'>
                                    </input>
                                </div>
                                <div className="col-auto">

                                    <input type="text" id="pengarang" className="form-control" name='pengarang' placeholder='Pengarang...'>
                                    </input>
                                </div>
                                <div className="col-auto">

                                    <input type="text" id="penerbit" className="form-control" name='penerbit' placeholder='Penerbit...'>
                                    </input>
                                </div>
                                <div className="col-auto">

                                    <input type="text" id="tahun" className="form-control" name='tahun' placeholder='Tahun...'>
                                    </input>
                                </div>
                                <div className="col-auto">

                                    <button type="submit" className="btn btn-primary ">Tambah</button>
                                </div>


                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <br></br>
            <div id='formUbah'></div>


            <div id='daftarBuku'>
                <div className='card'>
                    <div className='card-header bg-secondary text-white'>
                        <h5 className='card-title'>Daftar Buku</h5>
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