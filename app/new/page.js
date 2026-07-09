import Link from 'next/link';
import {createNote} from '../../lib/actions';

export default function NewPage() {
  return (
    <main>
      <h1>New note</h1>
      <form action={createNote}>
        <p>
          <input name="title" placeholder="Title" />
        </p>
        <p>
          <textarea name="body" placeholder="Body" />
        </p>
        <button type="submit">Save</button>
      </form>
      <Link href="/">Cancel</Link>
    </main>
  );
}
