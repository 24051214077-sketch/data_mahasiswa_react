
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Data dummy mahasiswa
  const dataMahasiswa = [
    {
      nim: "24051234001",
      nama: "Nabilla Azwira Balqis",
      noHp: "081234567890",
      email: "nabilla@gmail.com",
      alamat: "Surabaya, Jawa Timur",
      prodi: "Sistem Informasi",
      angkatan: "2024",
    },
    {
      nim: "24051234002",
      nama: "Emefef",
      noHp: "081234567891",
      email: "emefef@gmail.com",
      alamat: "Gresik, Jawa Timur",
      prodi: "Sistem Informasi",
      angkatan: "2024",
    },
    {
      nim: "24051234003",
      nama: "Siti Aisyah",
      noHp: "081234567892",
      email: "siti@gmail.com",
      alamat: "Bondowoso,Jawa Timur",
      prodi: "Sistem Informasi",
      angkatan: "2023",
    },
    {
      nim: "24051234004",
      nama: "Said Afnan",
      noHp: "081234567893",
      email: "said@gmail.com",
      alamat: "Malang, Jawa Timur",
      prodi: "Sistem Informasi",
      angkatan: "2024",
    },
    {
      nim: "24051234005",
      nama: "Dewi Lestari",
      noHp: "081234567894",
      email: "dewi@gmail.com",
      alamat: "Sidoarjo, Jawa Timur",
      prodi: "Sistem Informasi",
      angkatan: "2023",
    },
  ];

  // State data mahasiswa
  const [mahasiswa, setMahasiswa] = useState([]);

  // State jam digital
  const [waktu, setWaktu] = useState(new Date());

  // Mengisi data mahasiswa
  useEffect(() => {
    setMahasiswa(dataMahasiswa);
  }, []);

  // Live Clock menggunakan useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <h1>Academic Dashboard</h1>
        <p>Daftar Data Mahasiswa</p>
      </header>

      {/* Informasi Mahasiswa */}
      <div className="info-card">
        <h3>Jumlah Mahasiswa</h3>
        <h2>{mahasiswa.length} Mahasiswa</h2>
      </div>

      {/* Jam Digital */}
      <div className="clock-card">
        <h3>Jam Digital</h3>
        <h1>{waktu.toLocaleTimeString("id-ID")}</h1>
        <p>
          {waktu.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Tabel Mahasiswa */}
      <div className="table-container">
        <h2>Data Mahasiswa</h2>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                <th>No. HP</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Program Studi</th>
                <th>Angkatan</th>
              </tr>
            </thead>

            <tbody>
              {mahasiswa.map((mhs, index) => (
                <tr key={mhs.nim}>
                  <td>{index + 1}</td>
                  <td>{mhs.nim}</td>
                  <td>{mhs.nama}</td>
                  <td>{mhs.noHp}</td>
                  <td>{mhs.email}</td>
                  <td>{mhs.alamat}</td>
                  <td>{mhs.prodi}</td>
                  <td>{mhs.angkatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default App;
