'use server';

import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
import {getNotes, saveNotes} from './notes';

export async function createNote(formData) {
  const notes = getNotes();
  const id = Date.now().toString(36);
  notes.push({
    id,
    title: formData.get('title'),
    body: formData.get('body'),
  });
  saveNotes(notes);
  revalidatePath('/');
  redirect(`/${id}`);
}

export async function updateNote(formData) {
  const id = formData.get('id');
  const notes = getNotes();
  const note = notes.find((n) => n.id === id);
  note.title = formData.get('title');
  note.body = formData.get('body');
  saveNotes(notes);
  revalidatePath('/');
  revalidatePath(`/${id}`);
  redirect(`/${id}`);
}
