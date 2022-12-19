import React, { useState } from 'react';

function ManajemenBuku({ bookList, store }) {

    // console.log(bookList);
    const [form, setForm] = useState("");
    const [input, setInput] = useState();
    // data 

    // event handler
    function ShowFormTambah() {
        setForm("tambah");
    }
    function ShowFormEdit(buku) {
        setInput(buku);
        setForm("edit");
    }
    function HideForm() {
        setForm("");
    }
    // Handle
    function handleJudul(event) {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    }
    function handlePengarang(event) {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    }
    function handlePenerbit(event) {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    }
    function handleTahun(event) {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    }

    function submitAdd(event) {
        event.preventDefault();
        store(input);
        setForm("");
    }




    return (
        <div className='container-fluid mt-3' >
            <h1 className='text-center'>Manajemen Buku</h1>
            <br></br>
            <div id='formTambah'>
                {form === "tambah" && (
                    <div className='card'>
                        <div className='card-header bg-primary text-white'>
                            <h5 className='card-title '>Tambah Buku</h5>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={submitAdd}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">

                                        <input type="text" id="judul" className="form-control" name='judul' placeholder='Judul...' onChange={handleJudul}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="pengarang" className="form-control" name='pengarang' placeholder='Pengarang...' onChange={handlePengarang}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="penerbit" className="form-control" name='penerbit' placeholder='Penerbit...' onChange={handlePenerbit}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="tahun" className="form-control" name='tahun' placeholder='Tahun...' onChange={handleTahun}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <button type="submit" className="btn btn-primary ">Tambah</button>
                                    </div>


                                </div>
                            </form>

                        </div>
                    </div>
                )}
            </div>
            <br></br>
            <div id='formUbah'>
                {form === "edit" && (
                    <div className='card'>
                        <div className='card-header bg-dark text-white'>
                            <h5 className='card-title '>Edit Buku</h5>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">

                                        <input type="text" id="judul" className="form-control" name='judul' placeholder='Judul...' value={input.judul}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="pengarang" className="form-control" name='pengarang' placeholder='Pengarang...' value={input.pengarang}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="penerbit" className="form-control" name='penerbit' placeholder='Penerbit...' value={input.penerbit}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <input type="text" id="tahun" className="form-control" name='tahun' placeholder='Tahun...' value={input.tahun}>
                                        </input>
                                    </div>
                                    <div className="col-auto">

                                        <button type="button" className="btn btn-secondary " onClick={HideForm}>Batal</button>
                                        <button type="submit" className="btn btn-success mx-2 ">Edit</button>
                                    </div>


                                </div>
                            </form>

                        </div>
                    </div>
                )}
            </div>

            <br></br>
            <div id='daftarBuku'>
                <div className='card'>
                    <div className='card-header bg-secondary text-white'>
                        <h5 className='card-title'>Daftar Buku</h5>
                    </div>
                    <div className='card-body'>
                        <button className='btn btn-sm btn-primary mx-2' onClick={ShowFormTambah}>Tambah +</button>
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
                                            <button className='btn btn-sm btn-warning mx-2' onClick={() => ShowFormEdit(buku)}>Ubah</button>
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
        </div >
    )
}

export default ManajemenBuku; 