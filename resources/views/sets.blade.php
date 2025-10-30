<x-layout>

    <x-slot:title>Sets</x-slot:title>

    <header>
        <h1>Available sets</h1>
    </header>

    <main>
        <article>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
                @foreach ($sets as $set)
                    <tr>
                        <td>{{ $set->name }}</td>
                        <td>{{ $set->description }}</td>
                        <td><a href="{{ route("set", $set->id) }}">See more...</a></td>
                    </tr>
                @endforeach
            </table>
        </article>
    </main>

</x-layout>