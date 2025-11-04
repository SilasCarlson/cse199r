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
                </tr>
                @foreach ($sets as $set)
                    <tr>
                        <td><a href="{{ route("sets.index", $set->id) }}">{{ $set->name }}</a></td>
                        <td>{{ $set->description }}</td>
                    </tr>
                @endforeach
            </table>
        </article>
    </main>

</x-layout>