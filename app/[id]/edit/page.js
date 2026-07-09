import Link from 'next/link';
import {notFound} from 'next/navigation';
import {updateNote} from '../../../lib/actions';
import {getNote} from '../../../lib/notes';

export const instant = false

export default async function EditPage({params}) {
  const {id} = await params;
  const note = getNote(id);
  if (!note) {
    notFound();
  }
  return (
    <main>
      <h1>Edit note</h1>
      <form action={updateNote}>
        <input type="hidden" name="id" value={note.id} />
        <p>
          <input name="title" defaultValue={note.title} />
        </p>
        <p>
          <textarea name="body" defaultValue={note.body} />
        </p>
        <button type="submit">Save</button>
      </form>
      <Link href={`/${id}`}>Cancel</Link>
    </main>
  );
}
