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
import {Helmet} from 'react-helmet'
import {translate} from 'react-polyglot'
import {RouteProps} from 'react-router'
import _schema from '../../controllers/system/multilinguality/_schema.json'
import {H2} from './blogs/blogs_components/text_components/H2'
import {Li, Ul} from './blogs/blogs_components/text_components/List'
import {P} from './blogs/blogs_components/text_components/P'
import TextPageDraft from './blogs/blogs_components/TextPageDraft'
import {breadCrumbDataPrivacy, breadCrumbHome} from './breadcrumbs/breadcrumbs.constants'

interface IDataPrivacyProps {
    routeProps:RouteProps,
    t: (key:string, ...args:any) => string,
}

function DataPrivacy(props: IDataPrivacyProps) {
    const {t} = props
    const schema = _schema.pages.dataprivacy

    return <>
        <Helmet>
            <title>{t(schema.header.title)}</title>
            <meta name='description'
                  content={t(schema.header.description)}/>
            <meta name='keywords' content='wavect,data,privacy,value,experience,social,media'/>
        </Helmet>

        <TextPageDraft breadCrumbs={[breadCrumbHome, breadCrumbDataPrivacy]}>
            <H2>Datenschutz</H2>
            <P>Wir haben diese Datenschutzerklärung (Fassung 10.10.2019-221104031) verfasst, um Ihnen gemäß der Vorgaben
                der
                Datenschutz-Grundverordnung (EU) 2016/679 und dem <a
                    href='https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=221104031'
                    target='_blank' rel='noopener noreferrer'>Datenschutzgesetz (DSG)</a> zu
                erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche
                Entscheidungsmöglichkeiten
                Sie als Besucher dieser Webseite haben.</P>

            <P>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen. Wir haben
                uns bei der
                Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu
                beschreiben.</P>
            <H2>Automatische Datenspeicherung</H2>
            <P>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und
                gespeichert, so
                auch auf dieser Webseite.</P>
            <P>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf
                dem diese
                Webseite gespeichert ist) automatisch Daten wie</P>
            <Ul>
                <Li>die Adresse (URL) der aufgerufenen Webseite</Li>
                <Li>Browser und Browserversion</Li>
                <Li>das verwendete Betriebssystem</Li>
                <Li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</Li>
                <Li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen
                    wird
                </Li>
                <Li>Datum und Uhrzeit</Li>
            </Ul>
            <P>in Dateien (Webserver-Logfiles).</P>
            <P>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht.
                Wir geben
                diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
                rechtswidrigem Verhalten eingesehen werden.</P>
            <H2>Speicherung persönlicher Daten</H2>
            <P>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel
                Name,
                E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder
                Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils
                angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</P>
            <P>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die
                Kontakt
                ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
                Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht
                ausschließen,
                dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</P>
            <P>Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir
                keine sichere
                Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals
                unverschlüsselt per E-Mail zu übermitteln.</P>
            <H2>Rechte laut Datenschutzgrundverordnung</H2>
            <P>Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen
                <a
                    href='https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=221104031'
                    target='_blank'
                    rel='noopener noreferrer'
                > Datenschutzgesetzes
                    (DSG)</a> grundsätzlich die folgende Rechte zu:</P>
            <Ul>
                <Li>Recht auf Berichtigung (Artikel 16 DSGVO)</Li>
                <Li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</Li>
                <Li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</Li>
                <Li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der
                    Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel
                    19
                    DSGVO)
                </Li>
                <Li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</Li>
                <Li>Widerspruchsrecht (Artikel 21 DSGVO)</Li>
                <Li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung
                    — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
                </Li>
            </Ul>
            <P>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der
                Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter
                https://www.dsb.gv.at/ finden.</P>
            <H2>Auswertung des Besucherverhaltens</H2>
            <P>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres
                Besuchs dieser
                Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von
                Ihrem
                Verhalten auf dieser Website nicht auf Ihre Person schließen.</P>
            <P>Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der
                folgenden
                Datenschutzerklärung.</P>
            <H2>TLS-Verschlüsselung mit https</H2>
            <P>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch
                Technikgestaltung <a

                    href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=221104031'
                    target='_blank' rel='noopener noreferrer'>Artikel 25 Absatz 1 DSGVO</a>). Durch den
                Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren
                Datenübertragung im
                Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser
                Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des
                Schemas https (anstatt http) als Teil unserer Internetadresse.</P>
            <H2>Google reCAPTCHA Datenschutzerklärung</H2>
            <P>Unser oberstes Ziel ist es, dass unsere Webseite für Sie und für uns bestmöglich geschützt und
                sicher ist. Um
                das zu gewährleisten, verwenden wir Google reCAPTCHA der Firma Google Inc. (1600 Amphitheatre Parkway
                Mountain View, CA 94043, USA). Mit reCAPTCHA können wir feststellen, ob Sie auch wirklich ein Mensch aus
                Fleisch und Blut sind und kein Roboter oder eine andere Spam-Software. Unter Spam verstehen wir jede,
                auf
                elektronischen Weg, unerwünschte Information, die uns ungefragter Weise zukommt. Bei den klassischen
                CAPTCHAS mussten Sie zur Überprüfung meist Text- oder Bildrätsel lösen. Mit reCAPTCHA von Google müssen
                wir
                Sie meist nicht mit solchen Rätseln belästigen. Hier reicht es in den meisten Fällen, wenn Sie einfach
                ein
                Häkchen setzen und so bestätigen, dass Sie kein Bot sind. Mit der neuen Invisible reCAPTCHA Version
                müssen
                Sie nicht mal mehr ein Häkchen setzen. Wie das genau funktioniert und vor allem welche Daten dafür
                verwendet
                werden, erfahren Sie im Verlauf dieser Datenschutzerklärung.</P>
            <H2>Was ist reCAPTCHA?</H2>
            <P>reCAPTCHA ist ein freier Captcha-Dienst von Google, der Webseiten vor Spam-Software und den
                Missbrauch durch
                nicht-menschliche Besucher schützt. Am häufigsten wird dieser Dienst verwendet, wenn Sie Formulare im
                Internet ausfüllen. Ein Captcha-Dienst ist ein automatischer Turing-Test, der sicherstellen soll, dass
                eine
                Handlung im Internet von einem Menschen und nicht von einem Bot vorgenommen wird. Im klassischen
                Turing-Test
                (benannt nach dem Informatiker Alan Turing) stellt ein Mensch die Unterscheidung zwischen Bot und Mensch
                fest. Bei Captchas übernimmt das auch der Computer bzw. ein Softwareprogramm. Klassische Captchas
                arbeiten
                mit kleinen Aufgaben, die für Menschen leicht zu lösen sind, doch für Maschinen erhebliche
                Schwierigkeiten
                aufweisen. Bei reCAPTCHA müssen Sie aktiv keine Rätsel mehr lösen. Das Tool verwendet moderne
                Risikotechniken, um Menschen von Bots zu unterscheiden. Hier müssen Sie nur noch das Textfeld „Ich bin
                kein
                Roboter“ ankreuzen bzw. bei Invisible reCAPTCHA ist selbst das nicht mehr nötig. Bei reCAPTCHA wird ein
                JavaScript-Element in den Quelltext eingebunden und dann läuft das Tool im Hintergrund und analysiert
                Ihr
                Benutzerverhalten. Aus diesen Useraktionen berechnet die Software einen sogenannten Captcha-Score.
                Google
                berechnet mit diesem Score schon vor der Captcha-Eingabe wie hoch die Wahrscheinlichkeit ist, dass Sie
                ein
                Mensch sind. ReCAPTCHA bzw. Captchas im Allgemeinen kommen immer dann zum Einsatz, wenn Bots gewisse
                Aktionen (wie z.B. Registrierungen, Umfragen usw.) manipulieren oder missbrauchen könnten.</P>
            <H2>Warum verwenden wir reCAPTCHA auf unserer Website?</H2>
            <P>Wir wollen nur Menschen aus Fleisch und Blut auf unserer Seite begrüßen. Bots oder Spam-Software
                unterschiedlichster Art dürfen getrost zuhause bleiben. Darum setzen wir alle Hebel in Bewegung, uns zu
                schützen und die bestmögliche Benutzerfreundlichkeit für Sie anzubieten. Aus diesem Grund verwenden wir
                Google reCAPTCHA der Firma Google. So können wir uns ziemlich sicher sein, dass wir eine „botfreie“
                Webseite
                bleiben. Durch die Verwendung von reCAPTCHA werden Daten an Google übermittelt, die Google verwendet, um
                festzustellen, ob Sie auch wirklich ein Mensch sind. reCAPTCHA dient also der Sicherheit unserer
                Webseite
                und in weiterer Folge damit auch Ihrer Sicherheit. Zum Beispiel könnte es ohne reCAPTCHA passieren, dass
                bei
                einer Registrierung ein Bot möglichst viele E-Mail-Adressen registriert, um im Anschluss Foren oder
                Blogs
                mit unerwünschten Werbeinhalten „zuzuspamen“. Mit reCAPTCHA können wir solche Botangriffe
                vermeiden.</P>
            <H2>Welche Daten werden von reCAPTCHA gespeichert?</H2>
            <P>ReCAPTCHA sammelt personenbezogene Daten von Usern, um festzustellen, ob die Handlungen auf
                unserer Webseite
                auch wirklich von Menschen stammen. Es kann also die IP-Adresse und andere Daten, die Google für den
                reCAPTCHA-Dienst benötigt, an Google versendet werden. IP-Adressen werden innerhalb der Mitgliedstaaten
                der
                EU oder anderer Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum fast immer zuvor
                gekürzt, bevor die Daten auf einem Server in den USA landen. Die IP-Adresse wird nicht mit anderen Daten
                von
                Google kombiniert, sofern Sie nicht während der Verwendung von reCAPTCHA mit Ihrem Google-Konto
                angemeldet
                sind. Zuerst prüft der reCAPTCHA-Algorithmus, ob auf Ihrem Browser schon Google-Cookies von anderen
                Google-Diensten (YouTube. Gmail usw.) platziert sind. Anschließend setzt reCAPTCHA ein zusätzliches
                Cookie
                in Ihrem Browser und erfasst einen Schnappschuss Ihres Browserfensters.</P>
            <P>Die folgende Liste von gesammelten Browser- und Userdaten, hat nicht den Anspruch auf
                Vollständigkeit.
                Vielmehr sind es Beispiele von Daten, die nach unserer Erkenntnis, von Google verarbeitet
                werden.</P>
            <Ul>
                <Li>Referrer URL (die Adresse der Seite von der der Besucher kommt)</Li>
                <Li>IP-Adresse (z.B. 256.123.123.1)</Li>
                <Li>Infos über das Betriebssystem (die Software, die den Betrieb Ihres
                    Computers ermöglicht. Bekannte Betriebssysteme sind Windows, Mac OS X oder Linux)
                </Li>
                <Li>Cookies (kleine Textdateien, die Daten in Ihrem Browser speichern)</Li>
                <Li>Maus- und Keyboardverhalten (jede Aktion, die Sie mit der Maus oder der
                    Tastatur ausführen wird gespeichert)
                </Li>
                <Li>Datum und Spracheinstellungen (welche Sprache bzw. welches Datum Sie auf
                    Ihrem PC voreingestellt haben wird gespeichert)
                </Li>
                <Li>Alle Javascript-Objekte (JavaScript ist eine Programmiersprache, die
                    Webseiten ermöglicht, sich an den User anzupassen. JavaScript-Objekte können alle möglichen Daten
                    unter
                    einem Namen sammeln)
                </Li>
                <Li>Bildschirmauflösung (zeigt an aus wie vielen Pixeln die Bilddarstellung
                    besteht)
                </Li>
            </Ul>
            <P>Unumstritten ist, dass Google diese Daten verwendet und analysiert noch bevor Sie auf das Häkchen
                „Ich bin
                kein Roboter“ klicken. Bei der Invisible reCAPTCHA-Version fällt sogar das Ankreuzen weg und der ganze
                Erkennungsprozess läuft im Hintergrund ab. Wie viel und welche Daten Google genau speichert, erfährt man
                von
                Google nicht im Detail.</P>
            <P>Folgende Cookies werden von reCAPTCHA verwendet: Hierbei beziehen wir uns auf die reCAPTCHA
                Demo-Version von
                Google unter https://www.google.com/recaptcha/api2/demo. All diese Cookies
                benötigen zu Trackingzwecken eine eindeutige Kennung. Hier ist eine Liste an Cookies, die Google
                reCAPTCHA
                auf der Demo-Version gesetzt hat:</P>
            <P>
                <strong>Name:</strong> IDE

                <br/>
                <strong>Ablaufzeit:</strong> nach einem Jahr
                <br/>
                <strong>Verwendung:</strong> Dieses Cookie wird von der Firma DoubleClick
                (gehört auch Google) gesetzt, um die Aktionen eines Users auf der Webseite im Umgang mit Werbeanzeigen
                zu
                registrieren und zu melden. So kann die Werbewirksamkeit gemessen und entsprechende
                Optimierungsmaßnahmen
                getroffen werden. IDE wird in Browsern unter der Domain doubleclick.net gespeichert.
                <br/>
                <strong
                >Beispielwert:</strong> WqTUmlnmv_qXyi_DGNPLESKnRNrpgXoy1K-pAZtAkMbHI-221104031
                <P>
                    <strong>Name:</strong> 1P_JAR
                    <br/>
                    <strong>Ablaufzeit:</strong> nach einem Monat

                    <br/>
                    <strong>Verwendung:</strong> Dieses Cookie sammelt Statistiken zur
                    Website-Nutzung und misst Conversions. Eine Conversion entsteht z.B., wenn ein User zu einem Käufer
                    wird. Das Cookie wird auch verwendet, um Usern relevante Werbeanzeigen einzublenden. Weiters kann
                    man
                    mit dem Cookie vermeiden, dass ein User dieselbe Anzeige mehr als einmal zu Gesicht bekommt.
                    <br/>
                    <strong>Beispielwert:</strong> 2019-5-14-12</P>
                <P>
                    <strong>Name:</strong> ANID
                    <br/>
                    <strong>Ablaufzeit:</strong> nach 9 Monaten

                    <br/>
                    <strong>Verwendung:</strong> Viele Infos konnten wir über dieses Cookie
                    nicht in Erfahrung bringen. In der Datenschutzerklärung von Google wird das Cookie im Zusammenhang
                    mit
                    „Werbecookies“ wie z. B. „DSID“, „FLC“, „AID“, „TAID“ erwähnt. ANID wird unter Domain google.com
                    gespeichert.
                    <br/>
                    <strong>Beispielwert:</strong> U7j1v3dZa2211040310xgZFmiqWppRWKOr</P>
                <P>
                    <strong>Name:</strong> CONSENT
                    <br/>
                    <strong>Ablaufzeit:</strong> nach 19 Jahren
                    <br/>
                    <strong>Verwendung:</strong> Das Cookie speichert den Status der
                    Zustimmung eines Users zur Nutzung unterschiedlicher Services von Google. CONSENT dient auch der
                    Sicherheit, um User zu überprüfen, Betrügereien von Anmeldeinformationen zu verhindern und Userdaten
                    vor
                    unbefugten Angriffen zu schützen.
                    <br/>
                    <strong>Beispielwert: </strong>YES+AT.de+20150628-20-0</P>
                <P>
                    <strong>Name:</strong> NID

                    <br/>
                    <strong>Ablaufzeit:</strong> nach 6 Monaten

                    <br/>
                    <strong>Verwendung:</strong> NID wird von Google verwendet, um
                    Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre
                    meist eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer
                    maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, die Google benutzt um
                    persönliche Einstellungen des Users für Werbezwecke zu sammeln.
                    <br/>
                    <strong>Beispielwert:</strong> 0WmuWqy221104031zILzqV_nmt3sDXwPeM5Q</P>
                <P>
                    <strong>Name:</strong> DV
                    <br/>
                    <strong>Ablaufzeit:</strong> nach 10 Minuten
                    <br/>
                    <strong>Verwendung:</strong> Sobald Sie das „Ich bin kein
                    Roboter“-Häkchen angekreuzt haben, wird dieses Cookie gesetzt. Das Cookie wird von Google Analytics
                    für
                    personalisierte Werbung verwendet. DV sammelt Informationen in anonymisierter Form und wird weiters
                    benutzt, um User-Unterscheidungen treffen zu können.
                    <br/>
                    <strong>Beispielwert:</strong> gEAABBCjJMXcI0dSAAAANbqc221104031
                    <P>Anmerkung: Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google
                        erfahrungsgemäß die Wahl ihrer Cookies immer wieder auch verändert.</P>
                    <H2>Wie lange und wo werden die Daten gespeichert?</H2>
                    <P>Durch das Einfügen von reCAPTCHA werden Daten von Ihnen auf den Google-Server übertragen.
                        Wo genau
                        diese Daten gespeichert werden, stellt Google, selbst nach wiederholtem Nachfragen, nicht klar
                        dar.
                        Ohne eine Bestätigung von Google erhalten zu haben, ist davon auszugehen, dass Daten wie
                        Mausinteraktion, Verweildauer auf der Webseite oder Spracheinstellungen auf den europäischen
                        oder
                        amerikanischen Google-Servern gespeichert werden. Die IP-Adresse, die Ihr Browser an Google
                        übermittelt, wird grundsätzlich nicht mit anderen Google-Daten aus weiteren Google-Diensten
                        zusammengeführt. Wenn Sie allerdings während der Nutzung des reCAPTCHA-Plug-ins bei Ihrem
                        Google-Konto angemeldet sind, werden die Daten zusammengeführt.<strong
                        />Dafür gelten die abweichenden Datenschutzbestimmungen
                        der Firma Google.</P>
                    <H2>Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                        verhindern?</H2>
                    <P>Wenn Sie wollen, dass über Sie und über Ihr Verhalten keine Daten an Google übermittelt
                        werden,
                        müssen Sie sich, bevor Sie unsere Webseite besuchen bzw. die reCAPTCHA-Software verwenden, bei
                        Google vollkommen ausloggen und alle Google-Cookies löschen. Grundsätzlich werden die Daten
                        sobald
                        Sie unsere Seite aufrufen automatisch an Google übermittelt. Um diese Daten wieder zu löschen,
                        müssen Sie den Google-Support auf <a
                            href='https://support.google.com/?hl=de&tid=221104031'
                            rel='nofollow'>https://support.google.com/?hl=de&tid=221104031</a> kontaktieren.
                    </P>
                    <P>Wenn Sie also unsere Webseite verwenden, erklären Sie sich einverstanden, dass Google LLC
                        und deren
                        Vertreter automatisch Daten erheben, bearbeiten und nutzen.</P>
                    <P>Etwas mehr über reCAPTCHA erfahren Sie auf der Webentwickler-Seite von Google auf
                        https://developers.google.com/recaptcha/. Google
                        geht hier zwar auf die technische Entwicklung der reCAPTCHA näher ein, doch genaue Informationen
                        über Datenspeicherung und datenschutzrelevanten Themen sucht man auch dort vergeblich. Eine gute
                        Übersicht über die grundsätzliche Verwendung von Daten bei Google finden Sie in der hauseigenen
                        Datenschutzerklärung auf <a
                            href='https://policies.google.com/privacy?hl=de&tid=221104031'
                            target='_blank' rel='noopener noreferrer'
                        >https://www.google.com/intl/de/policies/privacy/</a>.
                    </P>
                    <H2>Google Analytics Datenschutzerklärung</H2>
                    <P>Wir verwenden auf dieser Website Google Analytics der Firma Google LLC (1600 Amphitheatre
                        Parkway
                        Mountain View, CA 94043, USA) um Besucherdaten statistisch auszuwerten. Dabei verwendet Google
                        Analytics zielorientierte Cookies.</P>
                    <H2>Cookies von Google Analytics</H2>
                    <Ul>
                        <Li>_ga
                            <Ul>
                                <Li>Ablaufzeit: 2 Jahre</Li>
                                <Li>Verwendung: Unterscheidung der Webseitenbesucher</Li>
                                <Li>Beispielhafter Wert: GA1.2.1326744211.152221104031</Li>
                            </Ul>
                        </Li>
                        <Li>_gid
                            <Ul>
                                <Li>Ablaufzeit: 24 Stunden</Li>
                                <Li>Verwendung: Unterscheidung der Webseitenbesucher</Li>
                                <Li>Beispielhafter Wert: GA1.2.1687193234.152221104031</Li>
                            </Ul>
                        </Li>
                        <Li>_gat_gtag_UA_
                            <Ul>
                                <Li>Ablaufzeit: 1 Minute</Li>
                                <Li>Verwendung: Wird zum Drosseln der Anforderungsrate
                                    verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird,
                                    erhält dieser Cookie den Namen _dc_gtm_.
                                </Li>
                                <Li>Beispielhafter Wert: 1</Li>
                            </Ul>
                        </Li>
                    </Ul>
                    <P>Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter
                        http://www.google.com/analytics/terms/de.html bzw. unter
                        https://support.google.com/analytics/answer/6004245?hl=de.
                    </P>
                    <H2>Pseudonymisierung</H2>
                    <P>Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres Angebotes und unseres
                        Webauftritts. Da
                        uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert. Die
                        Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des
                        Art 6
                        EU-DSGVO Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.</P>
                    <H2>Deaktivierung der Datenerfassung durch Google Analytics</H2>
                    <P>Mithilfe des <strong>Browser-Add-ons zur Deaktivierung</strong> von
                        Google Analytics-JavaScript (ga.js, analytics.js, dc.js) können Website-Besucher verhindern,
                        dass
                        Google Analytics ihre Daten verwendet.</P>
                    <P>Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website
                        bezogenen
                        Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter
                        dem
                        folgenden Link verfügbare Browser-Plugin herunterladen und installieren:
                        https://tools.google.com/dlpage/gaoptout?hl=de
                    </P>
                    <p/>
                    <H2>Eingebettete Social Media Elemente Datenschutzerklärung</H2>
                    <P>Wir binden auf unserer Webseite Elemente von Social Media Diensten ein um Bilder, Videos
                        und Texte
                        anzuzeigen.
                        <br/>
                        Durch den Besuch von Seiten die diese Elemente darstellen, werden Daten von Ihrem Browser zum
                        jeweiligen Social Media Dienst übertragen und dort gespeichert. Wir haben keinen Zugriff auf
                        diese
                        Daten.
                        <br/>
                        Die folgenden Links führen Sie zu den Seiten der jeweiligen Social Media Dienste wo erklärt
                        wird,
                        wie diese mit Ihren Daten umgehen:</P>
                    <Ul>
                        <Li>Instagram-Datenschutzrichtlinie: https://help.instagram.com/519522125107875
                        </Li>
                        <Li>Für YouTube gilt die Google Datenschutzerklärung:
                            https://policies.google.com/privacy?hl=de
                        </Li>
                        <Li><a href='https://www.facebook.com/about/privacy?tid=221104031' target='_blank'
                               rel='noopener noreferrer'>https://www.facebook.com/about/privacy</a></Li>
                        <Li><a href='https://twitter.com/de/privacy?tid=221104031' target='_blank'
                               rel='noopener noreferrer'>https://twitter.com/de/privacy</a>
                        </Li>
                    </Ul>
                    <H2>Facebook Datenschutzerklärung</H2>
                    <P>Wir verwenden auf dieser Webseite Funktionen von Facebook, einem Social Media Network der
                        FIrma
                        Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.
                        <br/>
                        Welche Funktionen (Soziale Plug-ins) Facebook bereitstellt, können Sie auf
                        https://developers.facebook.com/docs/plugins/ nachlesen.
                        <br/>
                        Durch den Besuch unserer Webseite können Informationen an Facebook übermittelt werden. Wenn Sie
                        über
                        ein Facebook-Konto verfügen, kann Facebook diese Daten Ihrem persönlichen Konto zuordnen.
                        Sollten
                        Sie das nicht wünschen, melden Sie sich bitte von Facebook ab.
                        <br/>
                        Die Datenschutzrichtlinien, welche Informationen Facebook sammelt und wie sie diese verwenden
                        finden
                        Sie auf https://www.facebook.com/policy.php.</P>
                    <H2>YouTube Datenschutzerklärung</H2>
                    <P>Wir haben auf unserer Webseite YouTube-Videos eingebaut. So können wir Ihnen interessante
                        Videos
                        direkt auf unserer Seite präsentieren. YouTube ist ein Videoportal, dass seit 2006 eine
                        Tochterfirma
                        von Google LLC ist. Betrieben wird das Videoportal durch YouTube, LLC, 901 Cherry Ave., San
                        Bruno,
                        CA 94066, USA. Wenn Sie auf unserer Webseite eine Seite aufrufen, die ein YouTube-Video
                        eingebettet
                        hat, verbindet sich Ihr Browser automatisch mit den Servern von YouTube bzw. Google. Dabei
                        werden
                        (je nach Einstellungen) verschiedene Daten übertragen. Für die gesamte Datenverarbeitung ist
                        Google
                        verantwortlich und es gilt somit auch der Datenschutz von Google.</P>
                    <P>Im Folgenden wollen wir Ihnen genauer erklären, welche Daten verarbeitet werden, warum
                        wir
                        YouTube-Videos eingebunden haben und wie Sie Ihre Daten verwalten oder löschen
                        können.</P>
                    <H2>Was ist YouTube?</H2>
                    <P>Auf YouTube können die User kostenlos Videos ansehen, bewerten, kommentieren und selbst
                        hochladen.
                        Über die letzten Jahre wurde YouTube zu einem der wichtigsten Social-Media-Kanäle weltweit.
                        Damit
                        wir Videos auf unserer Webseite anzeigen können, stellt YouTube einen Codeausschnitt zur
                        Verfügung,
                        den wir auf unserer Seite eingebaut haben.</P>
                    <H2>Warum verwenden wir YouTube-Videos auf unserer Webseite?</H2>
                    <P>YouTube ist die Videoplattform mit den meisten Besuchern und dem besten Content. Wir sind
                        bemüht,
                        Ihnen die bestmögliche User-Erfahrung auf unserer Webseite zu bieten. Und natürlich dürfen
                        interessante Videos dabei nicht fehlen. Mithilfe unserer eingebetteten Videos stellen wir Ihnen
                        neben unseren Texten und Bildern weiteren hilfreichen Content zur Verfügung. Zudem wird unsere
                        Webseite auf der Google-Suchmaschine durch die eingebetteten Videos leichter gefunden. Auch wenn
                        wir
                        über Google Ads Werbeanzeigen schalten, kann Google – dank der gesammelten Daten – diese
                        Anzeigen
                        wirklich nur Menschen zeigen, die sich für unsere Angebote interessieren.</P>
                    <H2>Welche Daten werden von YouTube gespeichert?</H2>
                    <P>Sobald Sie eine unserer Seiten besuchen, die ein YouTube-Video eingebaut hat, setzt
                        YouTube
                        zumindest
                        ein Cookie, das Ihre IP-Adresse und unsere URL speichert. Wenn Sie in Ihrem YouTube-Konto
                        eingeloggt
                        sind, kann YouTube Ihre Interaktionen auf unserer Webseite meist mithilfe von Cookies Ihrem
                        Profil
                        zuordnen. Dazu zählen Daten wie Sitzungsdauer, Absprungrate, ungefährer Standort, technische
                        Informationen wie Browsertyp, Bildschirmauflösung oder Ihr Internetanbieter. Weitere Daten
                        können
                        Kontaktdaten, etwaige Bewertungen, das Teilen von Inhalten über Social Media oder das Hinzufügen
                        zu
                        Ihren Favoriten auf YouTube sein.</P>
                    <P>Wenn Sie nicht in einem Google-Konto oder einem Youtube-Konto angemeldet sind, speichert
                        Google
                        Daten
                        mit einer eindeutigen Kennung, die mit Ihrem Gerät, Browser oder App verknüpft sind. So bleibt
                        beispielsweise Ihre bevorzugte Spracheinstellung beibehalten. Aber viele Interaktionsdaten
                        können
                        nicht gespeichert werden, da weniger Cookies gesetzt werden.</P>
                    <P>In der folgenden Liste zeigen wir Cookies, die in einem Test im Browser gesetzt wurden.
                        Wir
                        zeigen
                        einerseits Cookies, die ohne angemeldeten YouTube-Konto gesetzt werden. Andererseits zeigen wir
                        Cookies, die mit angemeldetem Account gesetzt werden. Die Liste kann keinen
                        Vollständigkeitsanspruch
                        erheben, weil die Userdaten immer von den Interaktionen auf YouTube abhängen.</P>
                    <P>
                        <strong>Name:</strong> YSC
                        <br/>
                        <strong>Verwendungszweck:</strong> Dieses Cookie registriert eine
                        eindeutige ID, um Statistiken des gesehenen Videos zu speichern.
                        <br/>
                        <strong>Ablaufdatum:</strong> nach Sitzungsende
                        <br/>
                        <strong>Beispielwert:</strong> b9-CV6ojI5Y</P>
                    <P>
                        <strong>Name:</strong> PREF
                        <br/>
                        <strong>Verwendungszweck:</strong> Dieses Cookie registriert
                        ebenfalls Ihre eindeutige ID. Google bekommt über PREF Statistiken, wie Sie YouTube-Videos auf
                        unserer Webseite verwenden.
                        <br/>
                        <strong>Ablaufdatum:</strong> nach 8 Monate
                        <br/>
                        <strong>Beispielwert:</strong> f1=50000000</P>
                    <P>
                        <strong>Name:</strong> GPS
                        <br/>
                        <strong>Verwendungszweck:</strong> Dieses Cookie registriert Ihre
                        eindeutige ID auf mobilen Geräten, um den GPS-Standort zu tracken.
                        <br/>
                        <strong>Ablaufdatum:</strong> nach 30 Minuten
                        <br/>
                        <strong>Beispielwert:</strong> 1</P>
                    <P>
                        <strong>Name:</strong> VISITOR_INFO1_LIVE
                        <br/>
                        <strong>Verwendungszweck:</strong> Dieses Cookie versucht die
                        Bandbreite des Users auf unseren Webseiten (mit eingebautem YouTube-Video) zu schätzen.
                        <br/>
                        <strong>Ablaufdatum:</strong> nach 8 Monaten
                        <br/>
                        <strong>Beispielwert:</strong> 95Chz8bagyU</P>
                    <P>Weitere Cookies, die gesetzt werden, wenn Sie mit Ihrem YouTube-Konto angemeldet
                        sind:</P>
                    <P>
                        <strong>Name:</strong> APISID
                        <br/>
                        <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet, um
                        ein Profil über Ihre Interessen zu erstellen. Genützt werden die Daten für personalisierte
                        Werbeanzeigen.
                        <br/>
                        <strong>Ablaufdatum:</strong> nach 2 Jahre
                        <br/>
                        <strong>Beispielwert:</strong> zILlvClZSkqGsSwI/AU1aZI6HY7221104031
                        <P>
                            <strong>Name:</strong> CONSENT
                            <br/>
                            <strong>Verwendungszweck:</strong> Das Cookie speichert den
                            Status der Zustimmung eines Users zur Nutzung unterschiedlicher Services von Google. CONSENT
                            dient auch der Sicherheit, um User zu überprüfen und Userdaten vor unbefugten Angriffen zu
                            schützen.
                            <br/>
                            <strong>Ablaufdatum: </strong>nach 19 Jahren
                            <br/>
                            <strong>Beispielwert:</strong> YES+AT.de+20150628-20-0</P>
                        <P>
                            <strong>Name:</strong> HSID
                            <br/>
                            <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet,
                            um ein Profil über Ihre Interessen zu erstellen. Diese Daten helfen personalisierte Werbung
                            anzeigen zu können.
                            <br/>
                            <strong>Ablaufdatum:</strong> nach 2 Jahren
                            <br/>
                            <strong>Beispielwert:</strong> AcRwpgUik9Dveht0I</P>
                        <P>
                            <strong>Name:</strong> LOGIN_INFO
                            <br/>
                            <strong>Verwendungszweck:</strong> In diesem Cookie werden
                            Informationen über Ihre Login-Daten gespeichert.
                            <br/>
                            <strong>Ablaufdatum:</strong> nach 2 Jahren
                            <br/>
                            <strong>Beispielwert:</strong> AFmmF2swRQIhALl6aL…</P>
                        <P>
                            <strong>Name:</strong> SAPISID
                            <br/>
                            <strong>Verwendungszweck:</strong> Dieses Cookie funktioniert,
                            indem es Ihren Browser und Ihr Gerät eindeutig identifiziert. Es wird verwendet, um ein
                            Profil
                            über Ihre Interessen zu erstellen.
                            <br/>
                            <strong>Ablaufdatum:</strong> nach 2 Jahren
                            <br/>
                            <strong>Beispielwert:</strong> 7oaPxoG-pZsJuuF5/AnUdDUIsJ9iJz2vdM
                        </P>
                        <P>
                            <strong>Name:</strong> SID
                            <br/>
                            <strong>Verwendungszweck:</strong> Dieses Cookie speichert Ihre
                            Google-Konto-ID und Ihren letzten Anmeldezeitpunkt in digital signierter und verschlüsselter
                            Form.
                            <br/>
                            <strong>Ablaufdatum:</strong> nach 2 Jahren
                            <br/>
                            <strong>Beispielwert:</strong> oQfNKjAsI221104031
                            <P>
                                <strong>Name:</strong> SIDCC
                                <br/>
                                <strong>Verwendungszweck:</strong> Dieses Cookie speichert
                                Informationen, wie Sie die Webseite nutzen und welche Werbung Sie vor dem Besuch auf
                                unserer
                                Seite möglicherweise gesehen haben.
                                <br/>
                                <strong>Ablaufdatum:</strong> nach 3 Monaten
                                <br/>
                                <strong>Beispielwert:</strong> AN0-TYuqub2JOcDTyL</P>
                            <H2>Wie lange und wo werden die Daten gespeichert?</H2>
                            <P>Die Daten, die YouTube von Ihnen erhält und verarbeitet werden auf den
                                Google-Servern
                                gespeichert. Die meisten dieser Server befinden sich in Amerika. Unter <a

                                    href='https://www.google.com/about/datacenters/inside/locations/?hl=de'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >https://www.google.com/about/datacenters/inside/locations/?hl=de</a> sehen
                                Sie genau wo sich die Google-Rechenzentren befinden. Ihre Daten sind auf den Servern
                                verteilt. So sind die Daten schneller abrufbar und vor Manipulation besser
                                geschützt.</P>
                            <P>Die erhobenen Daten speichert Google unterschiedlich lang. Manche Daten können
                                Sie
                                jederzeit
                                löschen, andere werden automatisch nach einer begrenzten Zeit gelöscht und wieder andere
                                werden von Google über längere Zeit gespeichert. Einige Daten (wie Elemente aus „Meine
                                Aktivität“, Fotos oder Dokumente, Produkte), die in Ihrem Google-Konto gespeichert sind,
                                bleiben so lange gespeichert, bis Sie sie löschen. Auch wenn Sie nicht in einem
                                Google-Konto
                                angemeldet sind, können Sie einige Daten, die mit Ihrem Gerät, Browser oder App
                                verknüpft
                                sind, löschen.</P>
                            <H2>Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                                verhindern?</H2>
                            <P>Grundsätzlich können Sie Daten im Google Konto manuell löschen. Mit der 2019
                                eingeführten
                                automatische Löschfunktion von Standort- und Aktivitätsdaten werden Informationen
                                abhängig
                                von Ihrer Entscheidung – entweder 3 oder 18 Monate gespeichert und dann
                                gelöscht.</P>
                            <P>Unabhängig, ob Sie ein Google-Konto haben oder nicht, können Sie Ihren Browser so
                                konfigurieren, dass Cookies von Google gelöscht bzw. deaktiviert werden. Je nach dem
                                welchen
                                Browser Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise. Die
                                folgenden
                                Anleitungen zeigen, wie Sie Cookies in Ihrem Browser verwalten:</P>
                            <P>
                                <a
                                    href='https://support.google.com/chrome/answer/95647?tid=221104031' target='_blank'
                                    rel='noopener noreferrer'>Chrome: Cookies in Chrome löschen,
                                    aktivieren und verwalten</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Safari: Verwalten von
                                    Cookies und Websitedaten mit Safari</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Firefox: Cookies löschen, um
                                    Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Internet Explorer: Löschen
                                    und Verwalten von Cookies</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Microsoft Edge: Löschen und
                                    Verwalten von Cookies</a>
                            </P>
                            <P>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so
                                einrichten,
                                dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei
                                jedem
                                einzelnen Cookie entscheiden, ob Sie es erlauben oder nicht. Da YouTube ein
                                Tochterunternehmen von Google ist, gibt es eine gemeinsame Datenschutzerklärung. Wenn
                                Sie
                                mehr über den Umgang mit Ihren Daten erfahren wollen, empfehlen wir Ihnen die
                                Datenschutzerklärung unter <a
                                    href='https://policies.google.com/privacy?hl=de'
                                    target='_blank' rel='noopener noreferrer'
                                >https://policies.google.com/privacy?hl=de.</a>
                            </P>
                            <H2>Twitter Datenschutzerklärung</H2>
                            <P>Wir verwenden auf dieser Webseite Funktionen von Twitter, einem Social Network
                                der Firma
                                Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07,
                                Irland.</P>
                            <P>Dadurch können auch personenbezogene Daten an Twitter übertragen werden. Wir
                                überwachen
                                diesen Datenaustausch nicht und speichern nichts darüber.</P>
                            <P>Wenn Sie mehr über die Nutzung Ihrer Daten durch Twitter wissen möchten, finden
                                Sie alle
                                Informationen in der <a
                                    href='https://twitter.com/de/privacy?tid=221104031'
                                    rel='nofollow'>Twitter Datenschutzrichtline auf
                                    https://twitter.com/de/privacy</a>.</P>
                            <P>Sollten Sie ein Konto bei Twitter haben, können Sie Ihre Datenschutzeinstellungen
                                in den
                                Konto- Einstellungen unter <a
                                    href='https://twitter.com/settings/account?tid=221104031'

                                    rel='nofollow'>https://twitter.com/settings/account</a> ändern.
                            </P>
                            <H2>Google+ Datenschutzerklärung</H2>
                            <P>Wir nutzen auf unserer Webseite Funktionen von Google+, dem Social Network der
                                Firma
                                Google
                                Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA).</P>
                            <P>Wenn Sie die angebotenen Funktionen voll nutzen möchten, benötigen Sie ein Google
                                Konto.</P>
                            <P>Auch bei der Nutzung der Funktionen (Google +1 Buttons, Google+ Badge, Follow
                                button,
                                Google+
                                Share button und Link, Sign-In Button, Hangout Button) ohne Google Konto werden bereits
                                Informationen an Google übermittelt.</P>
                            <P>Wenn Sie mit Ihrem Google Konto während der Nutzung der oben angeführten
                                Funktionen
                                angemeldet sind, werden Ihre Daten je nach Einstellung auf <a
                                    href='https://plus.google.com/settings/'

                                    rel='nofollow'>https://plus.google.com/settings/</a> weltweit
                                veröffentlicht und von Google gesammelt und ausgewertet.</P>
                            <P>Welche Daten von Google erfasst werden und wofür diese Daten verwendet werden,
                                können Sie
                                auf <a
                                    href='https://www.google.com/intl/de/policies/privacy/'
                                    rel='nofollow'>https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</P>
                            <H2>LinkedIn Datenschutzerklärung</H2>
                            <P>Wir verwenden auf unserer Webseite Funktionen des Social Media Netzwerks LinkedIn
                                der
                                Firma
                                LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA.</P>
                            <P>Durch den Aufruf von Seiten die solche Funktionen nutzen werden Daten
                                (IP-Adresse,
                                Browserdaten, Datum und Zeitpunkt, Cookies) an LinkedIn übermittelt, gespeichert und
                                ausgewertet.</P>
                            <P>Sollten Sie ein LinkedIn-Konto haben und angemeldet sein, werden diese Daten
                                Ihrem
                                persönlichen Konto und den darin gespeicherten Daten zugeordnet.</P>
                            <P>Die Datenschutzrichtlinien, welche Informationen LinkedIn sammelt und wie sie
                                diese
                                verwenden
                                finden Sie auf <a
                                    href='https://www.linkedin.com/legal/privacy-policy'
                                    rel='nofollow'>https://www.linkedin.com/legal/privacy-policy</a>.</P>
                            <H2>XING Datenschutzerklärung</H2>
                            <P>Wir verwenden auf unserer Webseite Funktionen des Social Media Netzwerks XING der
                                Firma
                                XING
                                SE, Dammtorstraße 30, 20354 Hamburg, Deutschland.</P>
                            <P>Durch den Aufruf von Seiten die solche Funktionen nutzen werden Daten
                                (IP-Adresse,
                                Browserdaten, Datum und Zeitpunkt, Cookies) an XING übermittelt, gespeichert und
                                ausgewertet.</P>
                            <P>Sollten Sie ein XING-Konto haben und angemeldet sein, werden diese Daten Ihrem
                                persönlichen
                                Konto und den darin gespeicherten Daten zugeordnet.</P>
                            <P>Die Datenschutzrichtlinien, welche Informationen XING sammelt und wie sie diese
                                verwenden
                                finden Sie auf https://www.xing.com/privacy.</P>
                            <H2>Cookies</H2>
                            <P>Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten zu
                                speichern.
                                <br/>
                                Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die
                                folgende Datenschutzerklärung besser verstehen.</P>
                            <H2>Was genau sind Cookies?</H2>
                            <P>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte
                                Browser
                                sind
                                beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die
                                meisten
                                Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man
                                Cookies.</P>
                            <P>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein.
                                Fast alle
                                Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch
                                anderer Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien,
                                die
                                von unserer Webseite auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden
                                automatisch im Cookie-Ordner, quasi dem „Hirn“ Ihres Browsers, untergebracht. Ein Cookie
                                besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen
                                zusätzlich
                                ein oder mehrere Attribute angegeben werden.</P>
                            <P>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder
                                persönliche
                                Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                                „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere
                                Webseite,
                                wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern
                                hat
                                jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies
                                in
                                einer einzigen Datei gespeichert.</P>
                            <P>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies.
                                Erstanbieter-Cookies
                                werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von
                                Partner-Webseiten
                                (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes
                                Cookie
                                andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten
                                bis
                                hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren,
                                Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs
                                zugreifen.</P>
                            <P>So können zum Beispiel Cookie-Daten aussehen:</P>
                            <P>
                                <strong>Name:</strong> _ga
                                <br/>
                                <strong>Wert:</strong> GA1.2.1326744211.152221104031
                                <strong>Verwendungszweck:</strong> Unterscheidung der
                                Webseitenbesucher
                                <br/>
                                <strong>Ablaufdatum:</strong> nach 2 Jahren</P>
                            <P>Diese Mindestgrößen sollte ein Browser unterstützen können:</P>
                            <Ul>
                                <Li>Mindestens 4096 Bytes pro Cookie</Li>
                                <Li>Mindestens 50 Cookies pro Domain</Li>
                                <Li>Mindestens 3000 Cookies insgesamt</Li>
                            </Ul>
                            <H2>Welche Arten von Cookies gibt es?</H2>
                            <P>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten
                                Diensten
                                ab
                                und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle
                                möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</P>
                            <P>Man kann 4 Arten von Cookies unterscheiden:</P>
                            <P>
                                <strong>Unerlässliche Cookies
                                    <br/>
                                </strong>Diese Cookies sind nötig, um grundlegende Funktionen der Webseite
                                sicherzustellen.
                                Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt,
                                dann
                                auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird
                                der
                                Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</P>
                            <P>
                                <strong>Zweckmäßige Cookies
                                    <br/>
                                </strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige
                                Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das
                                Verhalten der Webseite bei verschiedenen Browsern gemessen.</P>
                            <P>
                                <strong>Zielorientierte Cookies
                                    <br/>
                                </strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise
                                werden
                                eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</P>
                            <P>
                                <strong>Werbe-Cookies
                                    <br/>
                                </strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User
                                individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr
                                nervig
                                sein.</P>
                            <P>Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche
                                dieser
                                Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem
                                Cookie
                                gespeichert.</P>
                            <H2>Wie kann ich Cookies löschen?</H2>
                            <P>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von
                                welchem
                                Service oder welcher Webseite die Cookies stammen, haben Sie immer die Möglichkeit
                                Cookies
                                zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie
                                Cookies
                                von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</P>
                            <P>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden,
                                wenn
                                Sie
                                Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren
                                Browser-Einstellungen finden:</P>
                            <P>
                                <a
                                    href='https://support.google.com/chrome/answer/95647?tid=221104031'
                                    rel='nofollow'>Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221104031'
                                    rel='nofollow'>Safari: Verwalten von Cookies und Websitedaten mit
                                    Safari</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221104031'
                                    rel='nofollow'>Firefox: Cookies löschen, um Daten zu entfernen, die
                                    Websites auf Ihrem Computer abgelegt haben</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221104031'
                                    rel='nofollow'>Internet Explorer: Löschen und Verwalten von
                                    Cookies</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221104031'
                                    rel='nofollow'>Microsoft Edge: Löschen und Verwalten von Cookies</a>
                            </P>
                            <P>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so
                                einrichten,
                                dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei
                                jedem
                                einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise
                                ist
                                je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem
                                Suchbegriff “Cookies löschen Chrome” oder „Cookies deaktivieren Chrome“ im Falle eines
                                Chrome Browsers.</P>
                            <H2>Wie sieht es mit meinem Datenschutz aus?</H2>
                            <P>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten,
                                dass das
                                Speichern von Cookies eine Einwilligung des von Ihnen verlangt. Innerhalb der EU-Länder
                                gibt
                                es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich
                                erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des
                                Telekommunikationsgesetzes
                                (TKG).</P>
                            <P>Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen
                                nicht
                                zurückscheuen, empfehlen wir <a
                                    href='https://tools.ietf.org/html/rfc6265' target='_blank'
                                    rel='noopener noreferrer'
                                >https://tools.ietf.org/html/rfc6265</a>,
                                dem Request for Comments der Internet Engineering Task Force (IETF) namens „HTTP State
                                Management Mechanism“.</P>
                            <H2>MailChimp Datenschutzerklärung</H2>
                            <P>Wir versenden Newsletter mit MailChimp und verwenden auf dieser Webseite
                                Funktionen des
                                Newsletter Dienstes MailChimp der Firma The Rocket Science Group, LLC, 675 Ponce de Leon
                                Ave
                                NE, Suite 5000, Atlanta, GA 30308 USA um Newsletter-Anmeldungen zu erfassen.</P>
                            <H2>Allgemeine Informationen zu MailChimp</H2>
                            <P>Die Rocket Science Group LLC (MailChimp) unterhält Online-Plattformen, die es
                                unseren
                                Nutzern
                                ermöglichen, in Kontakt mit ihren Abonnenten zu bleiben, in erster Linie per E-Mail. Sie
                                erlauben Benutzern, E-Mail-Adressen und andere Informationen zum Abonnentenprofil, wie
                                z. B.
                                Name, physische Adresse und andere demografische Informationen, in die MailChimp
                                Datenbank
                                hochzuladen. Diese Informationen werden verwendet, um E-Mails zu senden und die
                                Verwendung
                                bestimmter anderer MailChimp-Funktionen für diese Benutzer zu ermöglichen. In
                                Übereinstimmung mit den veröffentlichten Datenschutzrichtlinien teilt MailChimp einige
                                Informationen mit Drittanbietern, um die Dienste bereitzustellen und zu unterstützen,
                                die
                                MailChimp den Nutzern anbietet. MailChimp teilt auch einige Informationen mit
                                Werbepartnern
                                von Drittanbietern, um die Bedürfnisse und Interessen der Nutzer besser zu verstehen,
                                damit
                                relevantere Inhalte und zielgerichtete Werbung für diese Nutzer und andere Nutzer
                                bereitgestellt werden können.</P>
                            <H2>Newsletter Anmeldung</H2>
                            <P>Wenn Sie auf unserer Webseite für unseren Newsletter anmelden, werden die
                                eingegebenen
                                Daten
                                bei MailChimp gespeichert.</P>
                            <H2>Löschung Ihrer Daten</H2>
                            <P>Sie können Ihre Zustimmung für den Erhalt unseres Newsletters jederzeit innerhalb
                                der
                                empfangenen E-Mail per Klick auf den Link im unteren Bereich entziehen. Wenn Sie sich
                                mittels Klick auf den Abmeldelink abgemeldet haben, werden Ihre Daten bei MailChimp
                                gelöscht.</P>
                            <H2>Newsletter Auswertung</H2>
                            <P>Wenn Sie einen Newsletter über MailChimp erhalten, werden Informationen wie
                                IP-Adresse,
                                Browsertyp und E-Mail-Programm gespeichert um uns Informationen zur Performance unseres
                                Newsletters zu geben. MailChimp kann mittels den in den HTML-E-Mails integrierten
                                Bildern
                                namens Web Beacons (Details finden Sie auf <a
                                    href='https://kb.mailchimp.com/reports/about-open-tracking'

                                    rel='nofollow'>https://kb.mailchimp.com/reports/about-open-tracking</a>)
                                feststellen ob die E-Mail angekommen ist, ob sie geöffnet wurde und ob Links angeklickt
                                wurden. All diese Informationen werden auf den Servern von MailChimp gespeichert, nicht
                                auf
                                dieser Webseite.</P>
                            <P>MailChimp ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework wodurch
                                der
                                korrekte
                                und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu
                                finden
                                Sie auf <a
                                    href='https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG'
                                    rel='nofollow'>https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG</a>.
                                Mehr über den Einsatz von Cookies bei MailChimp erfahren Sie auf
                                https://mailchimp.com/legal/cookies/,
                                Informationen zum Datenschutz bei MailChimp (Privacy) können Sie auf
                                https://mailchimp.com/legal/privacy nachlesen.
                            </P>
                            <H2>Cloudflare Datenschutzerklärung</H2>
                            <P>Wir verwenden auf dieser Webseite Cloudflare der Firma Cloudflare, Inc. (101
                                Townsend
                                St.,
                                San Francisco, CA 94107, USA), um unsere Webseite schneller und sicherer zu machen.
                                Dabei
                                verwendet Cloudflare Cookies und verarbeitet User-Daten. Cloudflare, Inc. ist eine
                                amerikanische Firma, die ein Content Delivery Network und diverse Sicherheitsdienste
                                anbietet. Diese Dienste befinden sich zwischen dem User und unserem Hosting-Anbieter.
                                Was
                                das alles genau bedeutet, versuchen wir im Folgenden genauer zu erläutern.</P>
                            <H2>Was ist Cloudflare?</H2>
                            <P>Ein Content Delivery Network (CDN), wie es die Firma Cloudflare bereitstellt, ist
                                nichts
                                anderes als ein Netzwerk aus verbundenen Servern. Cloudflare hat auf der ganzen Welt
                                solche
                                Server verteilt, um Webseiten schneller auf Ihren Bildschirm zu bringen. Ganz einfach
                                gesagt, legt Cloudflare Kopien unserer Webseite an und platziert sie auf ihren eigenen
                                Servern. Wenn Sie jetzt unsere Webseite besuchen, stellt ein System der Lastenverteilung
                                sicher, dass die größten Teile unsere Webseite von jenem Server ausgeliefert werden, der
                                Ihnen unsere Webseite am schnellsten anzeigen kann. Die Strecke der Datenübertragung zu
                                Ihrem Browser wird durch ein CDN deutlich verkürzt. Somit wird Ihnen der Content unserer
                                Webseite durch Cloudflare nicht nur von unserem Hosting-Server geliefert, sondern von
                                Servern aus der ganzen Welt. Besonders hilfreich wird der Einsatz von Cloudflare für
                                User
                                aus dem Ausland, da hier die Seite von einem Server in der Nähe ausgeliefert werden
                                kann.
                                Neben dem schnellen Ausliefern von Webseiten bietet Cloudflare auch diverse
                                Sicherheitsdienste, wie den DDoS-Schutz oder die Web Application Firewall
                                an.</P>
                            <H2>Warum wir Cloudflare auf unserer Webseite verwenden?</H2>
                            <P>Natürlich wollen wir Ihnen mit unserer Webseite das bestmögliche Service bieten.
                                Cloudflare
                                hilft uns dabei, unsere Webseite schneller und sicherer zu machen. Cloudflare bietet uns
                                sowohl Web-Optimierungen als auch Sicherheitsdienste, wie DDoS-Schutz und Web-Firewall,
                                an.
                                Dazu gehören auch ein <a
                                    href='https://de.wikipedia.org/wiki/Reverse_Proxy' target='_blank'
                                    rel='noopener noreferrer'>Reverse-Proxy</a> und
                                das Content-Verteilungsnetzwerk (CDN). Cloudflare blockiert Bedrohungen und begrenzt
                                missbräuchliche Bots und Crawler, die unsere Bandbreite und Serverressourcen
                                verschwenden.
                                Durch das Speichern unserer Webseite auf lokalen Datenzentren und das Blockieren von
                                Spam-Software ermöglicht Cloudflare, unsere Bandbreitnutzung etwa um 60% zu reduzieren.
                                Das
                                Bereitstellen von Inhalten über ein Datenzentrum in Ihrer Nähe und einiger dort
                                durchgeführten Web-Optimierungen reduziert die durchschnittliche Ladezeit einer Webseite
                                etwa um die Hälfte. Durch die Einstellung „I´m Under Attack Mode“ („Ich werde
                                angegriffen“-Modus) können laut Cloudflare weitere Angriffe abgeschwächt werden, indem
                                eine
                                JavaScript-Rechenaufgabe angezeigt wird, die man lösen muss, bevor ein User auf eine
                                Webseite zugreifen kann. Insgesamt wird dadurch unsere Webseite deutlich
                                leistungsstärker
                                und weniger anfällig auf Spam oder andere Angriffe.</P>
                            <H2>Welche Daten werden von Cloudflare gespeichert?</H2>
                            <P>Cloudflare leitet im Allgemeinen nur jene Daten weiter, die von
                                Webseitenbetreibern
                                gesteuert
                                werden. Die Inhalte werden also nicht von Cloudflare bestimmt, sondern immer vom
                                Webseitenbetreiber selbst. Zudem erfasst Cloudflare unter Umständen bestimmte
                                Informationen
                                zur Nutzung unserer Webseite und verarbeitet Daten, die von uns versendet werden oder
                                für
                                die Cloudflare entsprechende Anweisungen erhalten hat. In den meisten Fällen erhält
                                Cloudflare Daten wie IP-Adresse, Kontakt- und Protokollinfos, Sicherheitsfingerabdrücke
                                und
                                Leistungsdaten für Webseiten. Protokolldaten helfen Cloudflare beispielsweise dabei,
                                neue
                                Bedrohungen zu erkennen. So kann Cloudflare einen hohen Sicherheitsschutz für unsere
                                Webseite gewährleisten. Cloudflare verarbeitet diese Daten im Rahmen der Services unter
                                Einhaltung der geltenden Gesetze. Dazu zählt natürlich auch die
                                Datenschutzgrundverordnung
                                (DSGVO).</P>
                            <P>Aus Sicherheitsgründen verwendet Cloudflare auch ein Cookie. Das Cookie
                                (__cfduid) wird
                                eingesetzt, um einzelne User hinter einer gemeinsam genutzten IP-Adresse zu
                                identifizieren
                                und Sicherheitseinstellungen für jeden einzelnen User anzuwenden. Sehr nützlich wird
                                dieses
                                Cookie beispielsweise, wenn Sie unsere Webseite aus einem Lokal benutzen, in dem sich
                                eine
                                Reihe infizierter Computer befinden. Wenn aber Ihr Computer vertrauenswürdig ist, können
                                wir
                                dies anhand des Cookies erkennen. So können Sie, trotz infizierter PCs in Ihrem Umfeld,
                                ungehindert und sorgenfrei durch unsere Webseite surfen. Wichtig zu wissen ist auch
                                noch,
                                dass dieses Cookie keine personenbezogenen Daten speichert. Dieses Cookie ist für die
                                Cloudflare-Sicherheitsfunktionen unbedingt erforderlich und kann nicht deaktiviert
                                werden.</P>
                            <H2>Cookies von Cloudflare</H2>
                            <P>
                                <strong>Name:</strong> __cfduid
                                <br/>
                                <strong
                                >Wert:</strong> d798bf7df9c1ad5b7583eda5cc5e78221104031
                                <strong>Verwendungszweck:</strong> Sicherheitseinstellungen
                                für jeden einzelnen Besucher
                                <br/>
                                <strong>Ablaufdatum:</strong> nach einem Jahr</P>
                            <P>Cloudflare arbeitet auch mit Drittanbietern zusammen. Diese dürfen
                                personenbezogene Daten
                                nur
                                unter Anweisung der Firma Cloudflare und in Übereinstimmung mit den
                                Datenschutzrichtlinien
                                und anderer Vertraulichkeits- und Sicherheitsmaßnahmen verarbeiten. Ohne explizite
                                Einwilligung von uns gibt Cloudflare keine personenbezogenen Daten weiter.</P>
                            <H2>Wie lange und wo werden die Daten gespeichert?</H2>
                            <P>Cloudflare speichert Ihre Informationen hauptsächlich in den USA und im
                                Europäischen
                                Wirtschaftsraum. Cloudflare kann die oben beschriebenen Informationen aus der ganzen
                                Welt
                                übertragen und darauf zugreifen. Im Allgemeinen speichert Cloudflare Daten auf
                                User-Ebene
                                für Domains in den Versionen Free, Pro und Business für weniger als 24 Stunden. Für
                                Enterprise Domains, die Cloudflare Logs (früher Enterprise LogShare oder ELS) aktiviert
                                haben, können die Daten bis zu 7 Tage gespeichert werden. Wenn allerdings IP-Adressen
                                bei
                                Cloudflare Sicherheitswarnungen auslösen, kann es zu Ausnahmen der oben angeführten
                                Speicherungsdauer kommen.</P>
                            <H2>Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                                verhindern?</H2>
                            <P>Cloudflare bewahrt Daten-Protokolle nur solange wie nötig auf und diese Daten
                                werden auch
                                in
                                den meisten Fällen innerhalb von 24 Stunden wieder gelöscht. Cloudflare speichert auch
                                keine
                                personenbezogenen Daten, wie beispielsweise Ihre IP-Adresse. Es gibt allerdings
                                Informationen, die Cloudflare als Teil seiner permanenten Protokolle auf unbestimmte
                                Zeit
                                speichert, um so die Gesamtleistung von Cloudflare Resolver zu verbessern und etwaige
                                Sicherheitsrisiken zu erkennen. Welche permanenten Protokolle genau speichert werden,
                                können
                                Sie auf <a
                                    href='https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/privacy-policy/'
                                    target='_blank' rel='noopener noreferrer'
                                >https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/privacy-policy/</a> nachlesen.
                                Alle Daten, die Cloudflare sammelt (temporär oder permanent), werden von allen
                                personenbezogenen Daten bereinigt. Alle permanenten Protokolle werden zudem von
                                Cloudflare
                                anonymisiert.</P>
                            <P>Cloudflare geht in Ihrer Datenschutzerklärung darauf ein, dass sie für die
                                Inhalte, die
                                sie
                                erhalten nicht verantwortlich sind. Wenn Sie beispielsweise bei Cloudflare anfragen, ob
                                sie
                                Ihre Inhalte aktualisieren oder löschen können, verweist Cloudflare grundsätzlich auf
                                uns
                                als Webseitenbetreiber. Sie können auch die gesamte Erfassung und Verarbeitung Ihrer
                                Daten
                                durch Cloudflare komplett unterbinden, indem Sie die Ausführung von Script-Code in Ihrem
                                Browser deaktivieren oder einen Script-Blocker in Ihren Browser einbinden.</P>
                            <P>Cloudflare ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch
                                der
                                korrekte
                                und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu
                                finden
                                Sie auf <a
                                    href='https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&tid=221104031'
                                    target='_blank' rel='noopener noreferrer'
                                >https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0</a>.
                                <br/>
                                Mehr Informationen zum Datenschutz bei Cloudflare finden Sie auf <a

                                    href='https://www.cloudflare.com/de-de/privacypolicy/?tid=221104031' target='_blank'
                                    rel='noopener noreferrer'
                                >https://www.cloudflare.com/de-de/privacypolicy/</a>
                            </P>
                            <H2>Instagram Datenschutzerklärung</H2>
                            <P>Wir haben auf unserer Webseite Funktionen von Instagram eingebaut. Instagram ist
                                eine
                                Social
                                Media Plattform des Unternehmens Instagram LLC, 1601 Willow Rd, Menlo Park CA 94025,
                                USA.
                                Instagram ist seit 2012 ein Tochterunternehmen von Facebook Inc. und gehört zu den
                                Facebook-Produkten. Das Einbetten von Instagram-Inhalten auf unserer Webseite nennt man
                                Embedding. Dadurch können wir Ihnen Inhalte wie Buttons, Fotos oder Videos von Instagram
                                direkt auf unserer Webseite zeigen. Wenn Sie Webseiten unserer Webpräsenz aufrufen, die
                                eine
                                Instagram-Funktion integriert haben, werden Daten an Instagram übermittelt, gespeichert
                                und
                                verarbeitet. Instagram verwendet dieselben Systeme und Technologien wie Facebook. Ihre
                                Daten
                                werden somit über alle Facebook-Firmen hinweg verarbeitet.</P>
                            <P>Im Folgenden wollen wir Ihnen einen genaueren Einblick geben, warum Instagram
                                Daten
                                sammelt,
                                um welche Daten es sich handelt und wie Sie die Datenverarbeitung weitgehend
                                kontrollieren
                                können. Da Instagram zu Facebook Inc. gehört, beziehen wir unsere Informationen
                                einerseits
                                von den Instagram-Richtlinien, andererseits allerdings auch von den
                                Facebook-Datenrichtlinien selbst.</P>
                            <H2>Was ist Instagram?</H2>
                            <P>Instagram ist eines der bekanntesten Social Media Netzwerken weltweit. Instagram
                                kombiniert
                                die Vorteile eines Blogs mit den Vorteilen von audiovisuellen Plattformen wie YouTube
                                oder
                                Vimeo. Sie können auf „Insta“ (wie viele der User die Plattform salopp nennen) Fotos und
                                kurze Videos hochladen, mit verschiedenen Filtern bearbeiten und auch in anderen
                                sozialen
                                Netzwerken verbreiten. Und wenn Sie selbst nicht aktiv sein wollen, können Sie auch nur
                                anderen interessante Users folgen.</P>
                            <H2>Warum verwenden wir Instagram auf unserer Webseite?</H2>
                            <P>Instagram ist jene Social Media Plattform, die in den letzten Jahren so richtig
                                durch die
                                Decke ging. Und natürlich haben auch wir auf diesen Boom reagiert. Wir wollen, dass Sie
                                sich
                                auf unserer Webseite so wohl wie möglich fühlen. Darum ist für uns eine
                                abwechslungsreiche
                                Aufbereitung unserer Inhalte selbstverständlich. Durch die eingebetteten
                                Instagram-Funktionen können wir unseren Content mit hilfreichen, lustigen oder
                                spannenden
                                Inhalten aus der Instagram-Welt bereichern. Da Instagram eine Tochtergesellschaft von
                                Facebook ist, können uns die erhobenen Daten auch für personalisierte Werbung auf
                                Facebook
                                dienlich sein. So bekommen unsere Werbeanzeigen nur Menschen, die sich wirklich für
                                unsere
                                Produkte oder Dienstleistungen interessieren.</P>
                            <P>Instagram nützt die gesammelten Daten auch zu Messungs- und Analysezwecken. Wir
                                bekommen
                                zusammengefasste Statistiken und so mehr Einblick über Ihre Wünsche und Interessen.
                                Wichtig
                                ist zu erwähnen, dass diese Berichte Sie nicht persönlich identifizieren.</P>
                            <H2>Welche Daten werden von Instagram gespeichert?</H2>
                            <P>Wenn Sie auf eine unserer Seiten stoßen, die Instagram-Funktionen (wie
                                Instagrambilder
                                oder
                                Plug-ins) eingebaut haben, setzt sich Ihr Browser automatisch mit den Servern von
                                Instagram
                                in Verbindung. Dabei werden Daten an Instagram versandt, gespeichert und verarbeitet.
                                Und
                                zwar unabhängig, ob Sie ein Instagram-Konto haben oder nicht. Dazu zählen Informationen
                                über
                                unserer Webseite, über Ihren Computer, über getätigte Käufe, über Werbeanzeigen, die Sie
                                sehen und wie Sie unser Angebot nutzen. Weiters werden auch Datum und Uhrzeit Ihrer
                                Interaktion mit Instagram gespeichert. Wenn Sie ein Instagram-Konto haben bzw.
                                eingeloggt
                                sind, speichert Instagram deutlich mehr Daten über Sie.</P>
                            <P>Facebook unterscheidet zwischen Kundendaten und Eventdaten. Wir gehen davon aus,
                                dass
                                dies
                                bei Instagram genau so der Fall ist. Kundendaten sind zum Beispiel Name, Adresse,
                                Telefonnummer und IP-Adresse. Diese Kundendaten werden erst an Instagram übermittelt
                                werden,
                                wenn Sie zuvor „gehasht“ wurden. Hashing meint, ein Datensatz wird in eine Zeichenkette
                                verwandelt. Dadurch kann man die Kontaktdaten verschlüsseln. Zudem werden auch die oben
                                genannten „Event-Daten“ übermittelt. Unter „Event-Daten“ versteht Facebook – und
                                folglich
                                auch Instagram – Daten über Ihr Userverhalten. Es kann auch vorkommen, dass Kontaktdaten
                                mit
                                Event-Daten kombiniert werden. Die erhobenen Kontaktdaten werden mit den Daten, die
                                Instagram bereits von Ihnen hat, abgeglichen.</P>
                            <P>Über kleine Text-Dateien (Cookies), die meist in Ihrem Browser gesetzt werden,
                                werden die
                                gesammelten Daten an Facebook übermittelt. Je nach verwendeten Instagram-Funktionen und
                                ob
                                Sie selbst ein Instagram-Konto haben, werden unterschiedlich viele Daten
                                gespeichert.</P>
                            <P>Wir gehen davon aus, dass bei Instagram die Datenverarbeitung gleich funktioniert
                                wie bei
                                Facebook. Das bedeutet: wenn Sie ein Instagram-Konto haben oder www.instagram.com
                                besucht
                                haben, hat Instagram zumindest ein
                                Cookie gesetzt. Wenn das der Fall ist, sendet Ihr Browser über das Cookie Infos an
                                Instagram, sobald Sie mit einer Instagram-Funktion in Berührung kommen. Spätestens nach
                                90
                                Tagen (nach Abgleichung) werden diese Daten wieder gelöscht bzw. anonymisiert. Obwohl
                                wir
                                uns intensiv mit der Datenverarbeitung von Instagram beschäftigt haben, können wir nicht
                                ganz genau sagen, welche Daten Instagram exakt sammelt und speichert.</P>
                            <P>Im Folgenden zeigen wir Ihnen Cookies, die in Ihrem Browser mindestens gesetzt
                                werden,
                                wenn
                                Sie auf eine Instagram-Funktion (wie z.B. Button oder ein Insta-Bild) klicken. Bei
                                unserem
                                Test gehen wir davon aus, dass Sie kein Instagram-Konto haben. Wenn Sie bei Instagram
                                eingeloggt sind, werden natürlich deutlich mehr Cookies in Ihrem Browser
                                gesetzt.</P>
                            <P>Diese Cookies wurden bei unserem Test verwendet:</P>
                            <P>
                                <strong>Name: </strong>csrftoken
                                <br/>
                                <strong>Wert: </strong>„“
                                <br/>
                                <strong>Verwendungszweck: </strong>Dieses Cookie wird mit
                                hoher Wahrscheinlichkeit aus Sicherheitsgründen gesetzt, um Fälschungen von Anfragen zu
                                verhindern. Genauer konnten wir das allerdings nicht in Erfahrung bringen.
                                <br/>
                                <strong>Ablaufdatum:</strong> nach einem Jahr</P>
                            <P>
                                <strong>Name: </strong>mid
                                <br/>
                                <strong>Wert: </strong>„“
                                <br/>
                                <strong>Verwendungszweck: </strong>Instagram setzt dieses
                                Cookie, um die eigenen Dienstleistungen und Angebote in und außerhalb von Instagram zu
                                optimieren. Das Cookie legt eine eindeutige User-ID fest.
                                <br/>
                                <strong>Ablaufdatum:</strong> nach Ende der Sitzung</P>
                            <P>
                                <strong>Name:</strong> fbsr_221104031124024
                                <br/>
                                <strong>Wert: </strong>keine Angaben
                                <br/>
                                <strong>Verwendungszweck: </strong>Dieses Cookie speichert
                                die Log-in-Anfrage für User der Instagram-App.<strong>

                                <br/>
                            </strong>
                                <strong>Ablaufdatum:</strong> nach Ende der Sitzung</P>
                            <P>
                                <strong>Name:</strong> rur
                                <br/>
                                <strong>Wert: </strong>ATN
                                <br/>
                                <strong>Verwendungszweck: </strong>Dabei handelt es sich um
                                ein Instagram-Cookie, das die Funktionalität auf Instagram gewährleistet.
                                <br/>
                                <strong>Ablaufdatum:</strong> nach Ende der Sitzung</P>
                            <P>
                                <strong>Name:</strong> urlgen
                                <br/>
                                <strong>Wert: </strong>„194.96.75.33″: 1901:1iEtYv:Y833k2_UjKvXgYe221104031“
                                <br/>
                                <strong>Verwendungszweck: </strong>Dieses Cookie dient den
                                Marketingzwecken von Instagram.
                                <br/>
                                <strong>Ablaufdatum:</strong> nach Ende der Sitzung</P>
                            <P>
                                <strong>Anmerkung:</strong> Wir können hier keinen
                                Vollständigkeitsanspruch erheben. Welche Cookies im individuellen Fall gesetzt werden,
                                hängt
                                von den eingebetteten Funktionen und Ihrer Verwendung von Instagram ab.</P>
                            <H2>Wie lange und wo werden die Daten gespeichert?</H2>
                            <P>Instagram teilt die erhaltenen Informationen zwischen den Facebook-Unternehmen
                                mit
                                externen
                                Partnern und mit Personen, mit denen Sie sich weltweit verbinden. Die Datenverarbeitung
                                erfolgt unter Einhaltung der eigenen Datenrichtlinie. Ihre Daten sind, unter anderem aus
                                Sicherheitsgründen, auf den Facebook-Servern auf der ganzen Welt verteilt. Die meisten
                                dieser Server stehen in den USA.</P>
                            <H2>Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                                verhindern?</H2>
                            <P>Dank der Datenschutz Grundverordnung haben Sie das Recht auf Auskunft,
                                Übertragbarkeit,
                                Berichtigung und Löschung Ihrer Daten. In den Instagram-Einstellungen können Sie Ihre
                                Daten
                                verwalten. Wenn Sie Ihre Daten auf Instagram völlig löschen wollen, müssen Sie Ihr
                                Instagram-Konto dauerhaft löschen.</P>
                            <P>Und so funktioniert die Löschung des Instagram-Kontos:</P>
                            <P>Öffnen Sie zuerst die Instagram-App. Auf Ihrer Profilseite gehen Sie nach unten
                                und
                                klicken
                                Sie auf „Hilfebereich“. Jetzt kommen Sie auf die Webseite des Unternehmens. Klicken Sie
                                auf
                                der Webseite auf „Verwalten des Kontos“ und dann auf „Dein Konto löschen“.</P>
                            <P>Wenn Sie Ihr Konto ganz löschen, löscht Instagram Posts wie beispielsweise Ihre
                                Fotos und
                                Status-Updates. Informationen, die andere Personen über Sie geteilt haben, gehören nicht
                                zu
                                Ihrem Konto und werden folglich nicht gelöscht.</P>
                            <P>Wie bereits oben erwähnt, speichert Instagram Ihre Daten in erster Linie über
                                Cookies.
                                Diese
                                Cookies können Sie in Ihrem Browser verwalten, deaktivieren oder löschen. Abhängig von
                                Ihrem
                                Browser funktioniert die Verwaltung immer ein bisschen anders. Hier zeigen wir Ihnen die
                                Anleitungen der wichtigsten Browser.</P>
                            <P>
                                <a
                                    href='https://support.google.com/chrome/answer/95647?tid=221104031' target='_blank'
                                    rel='noopener noreferrer'>Chrome: Cookies in Chrome löschen,
                                    aktivieren und verwalten</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Safari: Verwalten von
                                    Cookies und Websitedaten mit Safari</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Firefox: Cookies löschen, um
                                    Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Internet Explorer: Löschen
                                    und Verwalten von Cookies</a>
                            </P>
                            <P>
                                <a
                                    href='https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221104031'
                                    target='_blank' rel='noopener noreferrer'>Microsoft Edge: Löschen und
                                    Verwalten von Cookies</a>
                            </P>
                            <P>Sie können auch grundsätzlich Ihren Browser so einrichten, dass Sie immer
                                informiert
                                werden,
                                wenn ein Cookie gesetzt werden soll. Dann können Sie immer individuell entscheiden, ob
                                Sie
                                das Cookie zulassen wollen oder nicht.</P>
                            <P>Instagram ist ein Tochterunternehmen von Facebook Inc. und Facebook ist aktiver
                                Teilnehmer
                                beim EU-U.S. Privacy Shield Framework. Dieses Framework stellt eine korrekte
                                Datenübertragung zwischen den USA und der Europäischen Union sicher. Unter <a

                                    href='https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG</a> erfahren
                                Sie mehr darüber. Wir haben versucht, Ihnen die wichtigsten Informationen über die
                                Datenverarbeitung durch Instagram näherzubringen. Auf <a
                                    href='https://help.instagram.com/519522125107875'
                                    target='_blank'
                                    rel='noopener noreferrer'>https://help.instagram.com/519522125107875</a>

                                <br/>
                                können Sie sich noch näher mit den Datenrichtlinien von Instagram
                                auseinandersetzen.</P>
                            <P>Quelle: Erstellt mit dem <a
                                title='Datenschutz Generator von firmenwebseiten.at'
                                href='https://www.firmenwebseiten.at/datenschutz-generator/' target='_blank'
                                rel='noopener noreferrer'
                                style={{textDecoration: 'none'}}>Datenschutz Generator von firmenwebseiten.at</a> in
                                Kooperation mit <a href='https://www.trigital.at' target='_blank'
                                                   rel='noopener noreferrer'
                                                   title=''
                                                   style={{textDecoration: 'none'}}>trigital.at</a>
                            </P>
                        </P>
                    </P>
                </P>
            </P>
        </TextPageDraft>
    </>
}

export default translate()(DataPrivacy)

