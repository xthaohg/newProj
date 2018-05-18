@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div id="app"></div>
                    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
                </div>
            </div>
        </div>
    </div>
@endsection
