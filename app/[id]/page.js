import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getNote} from '../../lib/notes';

export const instant = false

export default async function NotePage({params}) {
  const {id} = await params;
  const note = getNote(id);
  if (!note) {
    notFound();
  }
  return (
    <main>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <p>
        <Link href={`/${id}/edit`}>Edit</Link> · <Link href="/">Back</Link>
      </p>
    </main>
  );
}
