<x-layout>

    <x-slot:title>
        Welcome
    </x-slot:title>

    <header>
        <h1>CSE 199R</h1>
    </header>

    <main>
        <article>
            <h1>Hello There!</h1>
            <hr>
            <p>Welcome to my website.</p>
            @if (Auth::check())
                <p>You are logged in.</p>
                <p><a href="/logout">Logout here!</a></p>
            @else
                <p>You are <b>NOT</b> logged in.</p>
                <p><a href="/login">Login here!</a></p>
            @endif
        </article>
    </main>

</x-layout>