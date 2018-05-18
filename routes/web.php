<?php

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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/view', function (){
    return view('customer');
});

Route::resource('customer', 'CustomerController');
Route::get('sex', 'CustomerController@sex');

Route::group(['prefix' => 'api'], function (){
   Route::resource('users', 'UserController');

});

Route::view('/{any}', 'welcome')->where('any', '.*');
