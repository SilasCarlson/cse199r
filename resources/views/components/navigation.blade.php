<nav>
    <p id="brand">CSE 199R</p>
    <ul>
        <li><a href="{{ route("home") }}">Home</a></li>
        <li><a href="{{ route("sets.all") }}">Sets</a></li>

        @auth
            <li><a href="{{ route("logout") }}">Logout</a></li>
        @endauth

        @guest
            <li><a href="{{ route("login") }}">Login</a></li>
            <li><a href="{{ route("register") }}">Register</a></li>
        @endguest
    </ul>
    <button id="hide-navbar">=</button>
</nav>