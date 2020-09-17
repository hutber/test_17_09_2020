import {
  getByLabelText,
  findByLabelText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')

jest.dontMock('fs')

const stringToHTML = function (str) {
  const dom = document.createElement('div')
  dom.innerHTML = str
  return dom
}

describe('Integration Tests for all', function () {
  const container = stringToHTML(html)
  it('should have a header', function () {
    expect(getByTestId(container, 'header')).toHaveTextContent('Who lives with you?')
  })
  it('should have a subheader', function () {
    expect(getByTestId(container, 'subheader')).toHaveTextContent('New person details')
  })
  it('to have correct form elements with matching labels', function () {
    const formItems = ['Name', 'Date of Birth', 'Add Feedback']
    formItems.forEach((item) => {
      expect(getByLabelText(container, item)).toBeVisible()
    })
  })
  it('should display textarea when js is disabled', function () {
    expect(getByTestId(container, 'hidden_field')).toBeVisible()
  })

  it('should display textarea when clicked', function () {
    const hidden_field = getByTestId(container, 'hidden_field')
    const hidden_action = getByTestId(container, 'hidden_action')

    expect(hidden_field).not.toBeVisible()
    hidden_action.click()
    expect(hidden_field).toBeVisible()
    hidden_action.click()
    expect(hidden_field).not.toBeVisible()
  })
})
