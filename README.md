# Overview

- This is a learning notes

### Basic concept
* map
  ```javascript
    return (
		<div>
			<h1>Notes</h1>
			<ul>
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
		</div>
	);
  ```

* Ref
  * [reduce: get array sum](https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers)