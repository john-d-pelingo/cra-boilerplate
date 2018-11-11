import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { savePost } from '../../helpers/api'

interface IEditorProps {
  user: {
    id: string
  }
}

interface IEditorState {
  error: string | null
  isSaving: boolean
  redirect: boolean
}

interface IElements extends HTMLFormControlsCollection {
  content: RadioNodeList
  tags: RadioNodeList
  title: RadioNodeList
}

class Editor extends React.Component<IEditorProps, IEditorState> {
  state = {
    error: null,
    isSaving: false,
    redirect: false,
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (event.target instanceof HTMLFormElement) {
      const { title, content, tags } = event.target.elements as IElements

      const newPost = {
        authorId: this.props.user.id,
        content: content.value,
        date: new Date().toISOString(),
        tags: tags.value.split(',').map(t => t.trim()),
        title: title.value,
      }

      this.setState({
        isSaving: true,
      })
      savePost(newPost).then(
        (): void => {
          this.setState({
            redirect: true,
          })
        },
        (response: any) => {
          this.setState({
            error: response.data.error,
            isSaving: false,
          })
        },
      )
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input id="title-input" name="title" />

        <label htmlFor="content-input">Content</label>
        <textarea id="content-input" name="content" />

        <label htmlFor="tags-input">Tags</label>
        <input id="tags-input" name="tags" />

        <button type="submit" disabled={this.state.isSaving}>
          Submit
        </button>
        {this.state.error ? (
          <div data-testid="post-error">{this.state.error}</div>
        ) : null}
      </form>
    )
  }
}

export default Editor
