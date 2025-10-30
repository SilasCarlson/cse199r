<x-emptylayout>

    <x-slot:title>Login</x-slot:title>

    <main class="center-of-screen">
        <h1>Login</h1>
        @if ($errors->any())
            <div class="output-container">
                @foreach ($errors->all() as $error)
                    <div class="output" data-unselectable="true">
                        {{ $error }}
                    </div>
                @endforeach
            </div>
        @endif
        <form action="/login" method="POST" class="fontVerdana">
            @csrf
            <input type="email" name="email" placeholder="Email">
            <br><br>
            <input type="password" name="password" placeholder="Password">
            <br><br>
            <p><input type="checkbox" name="remember"> Remember Me</p>
            <input type="submit" name="login" value="Login" data-color="blue">
        </form>
    </main>

</x-emptylayout>