<x-emptylayout>

    <x-slot:title>Register</x-slot:title>

    <main class="contentContainer" data-theme="dark" data-fixed="true" data-position="centerOfScreen">
        <div class="content centerText">
            <h1>Register</h1>
            @if ($errors->any())
                @foreach ($errors->all() as $error)
                    <div class="output unselectable">
                        {{ $error }}
                    </div>
                @endforeach
            @endif
            <form action="/register" method="POST">
                @csrf
                <input type="email" name="email" placeholder="Email"><br><br>
                <input type="text" name="name" placeholder="Username"><br><br>
                <input type="password" name="password" placeholder="Password"><br><br>
                <input type="password" name="password_confirmation" placeholder="Password"><br><br>
                <input type="submit" name="register" value="Register" data-color="blue">
            </form>
        </div>
    </main>

</x-emptylayout>