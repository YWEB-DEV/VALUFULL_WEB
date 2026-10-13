import { useId, useRef, useState } from 'react'
import { interests } from '../content'
import Reveal from './Reveal'

const empty = { name: '', email: '', interest: '', message: '' }

function compose(form) {
  return [
    'ValuFull enquiry',
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Interest: ${form.interest}`,
    '',
    form.message.trim(),
  ].join('\n')
}

export default function Contact() {
  const formId = useId()
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [enquiry, setEnquiry] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const successRef = useRef(null)
  const summaryRef = useRef(null)

  function update(key) {
    return (event) => {
      setForm((current) => ({ ...current, [key]: event.target.value }))
      setErrors((current) => ({ ...current, [key]: undefined }))
    }
  }

  function validate(values) {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.interest) next.interest = 'Choose how you would like to be involved.'
    if (values.message.trim().length < 12) {
      next.message = 'Write a short message, at least 12 characters.'
    }
    return next
  }

  function onSubmit(event) {
    event.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length) {
      setEnquiry('')
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    const text = compose(form)
    setEnquiry(text)
    setCopied(false)
    setCopyFailed(false)
    sessionStorage.setItem('valufull-enquiry', text)
    requestAnimationFrame(() => successRef.current?.focus())
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(enquiry)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  const errorList = Object.values(errors)

  return (
    <section className="section contact" id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container contact__layout">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Where should ValuFull show up next?</h2>
          <p className="lead">
            Households, community partners, and investors are all part of this. Tell us
            about a neighbourhood, a site, or the conversation you want to have.
          </p>
          <ul className="contact__points">
            <li>Hosting a refill station</li>
            <li>Introducing a community</li>
            <li>An investor conversation</li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <div className="contact__card">
            {enquiry ? (
              <div className="success" role="status" tabIndex={-1} ref={successRef}>
                <h3>Your enquiry is ready.</h3>
                <p>
                  It is stored in this browser only, not on a ValuFull server. Copy it
                  and share it with the team until a live inbox is connected.
                </p>
                <textarea readOnly value={enquiry} aria-label="Enquiry text" rows={8} />
                <div className="success__actions">
                  <button type="button" className="btn btn--orange" onClick={copyEnquiry}>
                    {copied ? 'Copied' : 'Copy enquiry'}
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => {
                      setEnquiry('')
                      setForm(empty)
                    }}
                  >
                    Write another
                  </button>
                </div>
                {copyFailed ? (
                  <p className="field-error" role="alert">
                    The browser blocked clipboard access. Select the text above and copy it yourself.
                  </p>
                ) : null}
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} aria-describedby={errorList.length ? `${formId}-summary` : undefined}>
                <h3>Send a note</h3>
                {errorList.length ? (
                  <div className="form-summary" id={`${formId}-summary`} role="alert" tabIndex={-1} ref={summaryRef}>
                    <p>Check the form before continuing.</p>
                    <ul>
                      {errorList.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="field">
                  <label htmlFor={`${formId}-name`}>Full name</label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                    required
                  />
                  {errors.name ? (
                    <p className="field-error" id={`${formId}-name-error`}>
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-email`}>Email</label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={update('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    required
                  />
                  {errors.email ? (
                    <p className="field-error" id={`${formId}-email-error`}>
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-interest`}>I am interested as</label>
                  <select
                    id={`${formId}-interest`}
                    name="interest"
                    value={form.interest}
                    onChange={update('interest')}
                    aria-invalid={errors.interest ? 'true' : 'false'}
                    aria-describedby={errors.interest ? `${formId}-interest-error` : undefined}
                    required
                  >
                    <option value="">Select one</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {errors.interest ? (
                    <p className="field-error" id={`${formId}-interest-error`}>
                      {errors.interest}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-message`}>Message</label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                    required
                  />
                  {errors.message ? (
                    <p className="field-error" id={`${formId}-message-error`}>
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <button type="submit" className="btn btn--orange">
                  Prepare enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
