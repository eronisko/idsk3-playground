import { useEffect } from 'react'
import './V3.scss'
import { initAll } from 'eronisko-idsk-frontend'

function App() {
    useEffect(() => {
        initAll()
    }, [])


    return (
        <>
            <div>

                <button type="submit" className="govuk-button govuk-button__basic" data-module="govuk-button">
                    Primary button
                </button>
            </div>
            <div>
                <div className="govuk-accordion" data-module="govuk-accordion" id="with-descriptions">
                    <div className="govuk-accordion__section">
                        <div className="govuk-accordion__section-header ">
                            <h2 className="govuk-accordion__section-heading">
                                <span className="govuk-accordion__section-button" id="with-descriptions-heading-1">
                                    Názov
                                </span>
                            </h2>
                        </div>
                        <div id="with-descriptions-content-1" className="govuk-accordion__section-content">
                            <p className="govuk-body">
                                We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
                            </p>
                        </div>
                    </div>
                    <div className="govuk-accordion__section">
                        <div className="govuk-accordion__section-header ">
                            <h2 className="govuk-accordion__section-heading">
                                <span className="govuk-accordion__section-button" id="with-descriptions-heading-2">
                                    Názov
                                </span>
                            </h2>
                            <div className="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-2">
                                Popis
                            </div>
                        </div>
                        <div id="with-descriptions-content-2" className="govuk-accordion__section-content">
                            <p className="govuk-body">
                                We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
