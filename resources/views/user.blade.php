<x-layout>

    <x-slot:title>User</x-slot:title>

    @if (isset($user))

        <header class="jumbotron">
            <h1>Hello, {{ $user->name }}</h1>
        </header>

        <main>
            <h1>User Properties</h1>
            <p>name: {{ $user->name }}</p>
            <p>email: {{ $user->email }}</p>
        </main>

    @else

        <main>
            <div class="output" data-unselectable="true">Unknown user!</div>
            <p>Return to <a href="{{ route("home") }}">home</a></p>
        </main>

    @endif

</x-layout>