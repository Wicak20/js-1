const biodata = {
    nama: 'Wicak Saestu Mukti',
    umur: 24,
    hobbies: ['basket', 'badminton', 'traveling'],
    menikah: false,
    pendidikan: [{
        namaSekolah: 'SMPN 1 Tambun Selatan',
        tahunMasuk: 2011,
        tahunKeluar: 2014,
        jurusan: null,
        lokasi: 'Kabupaten Bekasi',
    },
    {
        namaSekolah: 'SMAN 3 Tambun Selatan',
        tahunMasuk: 2014,
        tahunKeluar: 2017,
        jurusan: 'Ilmu Pengetahuan Sosial',
        lokasi: 'Kabupaten Bekasi',
    },
    {
        namaSekolah: 'Universitas Tanjungpura',
        tahunMasuk: 2018,
        tahunKeluar: 2022,
        jurusan: 'Hukum',
        lokasi: 'Kota Pontianak',
    }
    ],
    skils: [{
        skillName: 'html',
        level: 'beginner'
    },
    {
        skillName: 'css',
        level: 'beginner',
    },
    {
        skillName: 'javascript',
        level: 'beginner'
    }
    ],
    tertarikDenganCoding: true
}

console.log(biodata.nama)