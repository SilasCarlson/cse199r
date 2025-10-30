<nav>
    <p id="brand">CSE 199R</p>
    <ul>
        <li><a href="{{ route("home") }}">Home</a></li>

        @auth
            <li><a href="{{ route("auth.logout") }}">Logout</a></li>
        @endauth

        @guest
            <li><a href="{{ route("auth.login") }}">Login</a></li>
            <li><a href="{{ route("register") }}">Register</a></li>
        @endguest
    </ul>
    <button id="hide-navbar">=</button>
</nav>