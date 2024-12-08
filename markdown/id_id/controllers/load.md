<!--
Jenis Document: Dokumen Teknis
Tujuan: Dokumentasi Seme Framework
Penulis: Daeng Rosanda 
Dibuat pada tanggal: 2024-11-26
Diperbaru pada tanggal: 2024-11-26
-->
[Seme Framework](../../seme_framework.md) > [id](../index.md) > [controller](index.md) > [load](load.md)


# Metode Load
Metode load digunakan untuk memanggil file model atau file library pada saat dalam konteks Controller. Di metode ini juga mengizinkan untuk menginstansiasi file yang dipanggil menjadi sebuah object. Secara default, nama dari object yang telah terinstansiasi akan sama dengan nama file dengan huruf kecil. Bisa juga diganti nama object dengan nama yang diinginkan atau diberikan alias.

## Bentuk Umum
Berikut ini adalah bentuk umum metode load dari kelas SENE_Controller .
```php
$this->load(string $filename_location[, string $alias=''[, string $load_type='model']]):self
```

### Parameter
Metode load terdiri dari 3 parameter yaitu filename_location, $alias, dan jenis pemanggilan $load_type.

#### $filename_location
Berisi nama file yang akan di panggil tanpa akhiran .php.

#### $alias
Nama alias dari object yang telah dipanggil kedalam controller. Jika diberi string kosong, maka akan menggunakan nama file tanpa akhiran .php sebagai nama object.

#### $load_type
Jenis pemanggilan dari file yang akan dipanggil yaitu "model", "lib" atau "". Jika string kosong, maka akan memanggil library tapi tanpa di instansiasi menjadi sebuah object.

## Contoh Penggunaan
Berikut ini adalah contoh lengkap penggunaan metode load di dalam sebuah kelas controller yang extends dari SENE_Controller.

### Tanpa Alias

```php
<?php
class Blog extends \SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this->load('api/hello_model');
  }
  public function index(){
    //menjalankan metode get dari hello_model
    print_r($this->hello_model->get());
    die();
  }
}
```

### Menggunakan Alias

```php
<?php
class Blog extends \SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this->load('api/hello_model','h');
  }
  public function index(){
    //menjalankan metode get dari hello_model
    print_r($this->h->get());
    die();
  }
}
```


## Perhatian

Pastikan untuk selalu memakai alias yang unik untuk setiap pemanggilan model.
Apabila ada alias yang sama, maka bisa menyebabkan akan mendapatkan hasil yang tidak diinginkan.

### Tips

Jika bingung menentukan alias, gunakan alias dengan awalan nama kelasnya masing-masing.
Dan, apabila ada yang sama, berikan akhiran nomor pada akhir aliasnya.
Contoh, `app/model/api/hello_detail_model2.php` dan aliasnya akan lebih baik jika dinamakan `hdm2`.