import Link from 'next/link';
import {getNotes} from '../lib/notes';

export const instant = false

export default function Home() {
  const notes = getNotes();
  return (
    <main>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/new">New note</Link>
    </main>
  );
}
