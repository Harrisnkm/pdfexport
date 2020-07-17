<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
 *
 * PDF Export Routes
 */

Route::get('/projects/pdfexport', 'PdfExportController@index');
Route::post('/projects/pdfexport/adduser', 'PdfExportController@addUser');
Route::get('/projects/pdfexport/getusers', 'PdfExportController@getUsers');
Route::post('/projects/pdfexport/{form}', 'PdfExportController@exportPdf');
