/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import { H2 } from './blogs/blogs_components/text_components/H2'
import { P } from './blogs/blogs_components/text_components/P'
import { Li, Ul } from './blogs/blogs_components/text_components/List'
import TextPageDraft from './blogs/blogs_components/TextPageDraft'
import { breadCrumbHome, breadCrumbImpressum } from './breadcrumbs/breadcrumbs.constants'
import { RouteProps } from 'react-router'
import { Helmet } from 'react-helmet'
import { translate } from 'react-polyglot'
import _schema from '../../controllers/system/multilinguality/_schema.json'

interface IImpressumProps {
    routeProps: RouteProps
    t: (key: string, ...args: any) => string
}

function Impressum(props: IImpressumProps) {
    const { t } = props
    const schema = _schema.pages.impressum

    return (
        <>
            <Helmet>
                <title>{t(schema.header.title)}</title>
                <meta name="description" content={t(schema.header.description)} />
                <meta name="keywords" content="wavect,impressum,data,privacy,user,protection" />
            </Helmet>

            <TextPageDraft breadCrumbs={[breadCrumbHome, breadCrumbImpressum]}>
                <P>
                    Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25
                    Mediengesetz.
                </P>
                <P>
                    Kevin Riedl (später: Wavect GmbH)
                    <br />
                    Kevin Riedl
                    <br />
                    Römerstrasse 3a, Top 9, <br />
                    6070 Ampass, <br />
                    Austria
                </P>
                <P>
                    <strong>Unternehmensgegenstand:</strong> IT & Marketing Dienstleistungen
                    <br />
                </P>
                <P>
                    <strong>Tel.:</strong> +436503056644
                    <br />
                    <strong>E-Mail:</strong> <a href="mailto:office@wavect.io">office@wavect.io</a>
                </P>
                <P>
                    <strong>Verleihungsstaat:</strong> Österreich
                </P>
                <P>
                    Quelle: Erstellt mit dem{' '}
                    <a
                        title="Impressum Generator von firmenwebseiten.at"
                        href="https://www.firmenwebseiten.at/impressum-generator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Impressum Generator von firmenwebseiten.at
                    </a>{' '}
                    in Kooperation mit{' '}
                    <a href="https://www.pressefeuer.at" target="_blank" rel="noopener noreferrer" title="" style={{ textDecoration: 'none' }}>
                        pressefeuer.at
                    </a>
                </P>
                <H2>EU-Streitschlichtung</H2>
                <P>
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
                    Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                    <br />
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter{' '}
                    <a
                        href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        http://ec.europa.eu/odr?tid=221104031
                    </a>{' '}
                    zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
                </P>
                <P>
                    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </P>
                <H2>Haftung für Inhalte dieser Webseite</H2>
                <P>
                    Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                    Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens
                    Dritter bereitgestellt wurden.
                </P>
                <P>
                    Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden die
                    Kontaktdaten im Impressum.
                </P>
                <H2>Haftung für Links auf dieser Webseite</H2>
                <P>
                    Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites
                    besteht laut{' '}
                    <a
                        href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40025813&tid=221104031"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        § 17 ECG
                    </a>{' '}
                    für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht
                    aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                </P>
                <P>
                    Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im
                    Impressum.
                </P>
                <H2>Urheberrechtshinweis</H2>
                <P>
                    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die
                    unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                </P>
                <H2>Bildernachweis</H2>
                <P>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</P>
                <P>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</P>
                <Ul>
                    <Li>Pexels (inkl. veröffentlichende Fotografen) & Riedl Kevin</Li>
                </Ul>
            </TextPageDraft>
        </>
    )
}

export default translate()(Impressum)
