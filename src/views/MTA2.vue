<template>
    <Header ueberschrift="MTA2 2023" />
    <div id="mta2">
        <div>
            <center>
                <img class="col-12" id="Bild" ref="Bild"><br>
                <h4 id="Frage" ref="Frage">Frage</h4>
            </center>
        </div>
        <div id="Eingabe">
            <center>
                <div id="Antwort1" ref="Antwort1" class="d-flex align-items-center">
                    <input class="col-2" type="checkbox" id="checkbox1" ref="checkbox1"><label class="col-10" for="checkbox1"
                        id="checkbox1Label" ref="checkbox1Label">Antwort 1</label>
                </div>
                <div id="Antwort2" ref="Antwort2" class="d-flex align-items-center">
                    <input class="col-2" type="checkbox" id="checkbox2" ref="checkbox2"><label class="col-10" for="checkbox1"
                        id="checkbox2Label" ref="checkbox2Label">Antwort 2</label>
                </div>
                <div id="Antwort3" ref="Antwort3" class="d-flex align-items-center">
                    <input class="col-2" type="checkbox" id="checkbox3" ref="checkbox3"><label class="col-10" for="checkbox1"
                        id="checkbox3Label" ref="checkbox3Label">Antwort 3</label>
                </div>
                <div id="Antwort4" ref="Antwort4" class="d-flex align-items-center">
                    <input class="col-2" type="checkbox" id="checkbox4" ref="checkbox4"><label class="col-10" for="checkbox1"
                        id="checkbox4Label" ref="checkbox4Label">Antwort 4</label>
                </div>
                <button id="buttonAbschicken" ref="buttonAbschicken" @click="checkAnswer" class="btn btn-success">Abschicken</button>
                <button id="buttonWeiter" ref="buttonWeiter" @click="next" class="btn btn-secondary">Nächste Frage</button>
            </center>
        </div>
        <br>
        <div class="Aufgabenzahl">
            <center>
                <h5 id="Aufgabe" ref="Aufgabe"></h5>
            </center>
        </div>
    </div>
    <Footer backLink="/lern-hub"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {ref, onMounted} from 'vue'

export default {
    name: 'MTA2',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            fragen: [[// Frage 1
                "Ihr Trupp erhält den Auftrag, für den Angriffstrupp eine Schlauchleitung zum Vorgehen in ein Gebäude vorzubereiten. Einsatzziel ist eine Wohnung im 2. Obergeschoss. Wie viel Schlauchreserve ordnen sie als Truppführer an?",
                // Antwort 1
                "4 C-Schläuche (1 C-Länge zum Gebäude, 1 C-Länge für jedes Geschoss, 1 C-Länge je Nutzungseinheit",
                // Antwort 2
                "5 C-Schläuche (2 C-Länge zum Gebäude, 1 C-Länge für jedes Geschoss, 1 C-Länge je Nutzungseinheit",
                // Antwort 3
                "6 C-Schläuche (2 C-Länge zum Gebäude, 1 C-Länge für jedes Geschoss, 2 C-Länge je Nutzungseinheit",
                // Antwort 4
                "1 C-Schlauch",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 2
                "Im Rahmen einer Bewegungsfahrt kommen Sie an einem Verkehrsunfall vorbei. Ordnen Sie die Begriffe zum Umgang mit Verletzten bei Verkehrsunfällen in der richtigen Reihenfolge: <br>1 - Unfallstelle absichern <br>2 - Nachalarmierung veranlassen <br>3 - Zündquellen fernhalten (Handy, Feuerzeug) <br>4 - Verletzte betreuen",
                // Antwort 1
                "1-2-3-4",
                // Antwort 2
                "1-4-3-2",
                // Antwort 3
                "4-3-2-1",
                // Antwort 4
                "2-1-3-4",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 3
                "Was müssen Sie bei einem Stromunfall im Niederspannungsbereich (Spannung 230 bis 400 Volt) zuerst tun? Ordnen Sie die Begriffe in der richtigen Reihenfolge! <br>1 - Den Verunfallten von einem gut isolierten Standort aus wegziehen <br>2 - Die Stromleitung spannungsfrei schalten (lassen) <br>3 - Rettungsdienst über den Einheitsführer alarmieren <br> 4 - Erste Hilfe - Maßnahmen durchführen",
                // Antwort 1
                "2-1-3-4",
                // Antwort 2
                "1-2-3-4",
                // Antwort 3
                "4-3-2-1",
                // Antwort 4
                "2-4-3-1",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 4
                "Welche Aussagen über Kohlenmonoxid sind richtig?",
                // Antwort 1
                "entsteht bei unvollkommener Verbrennung",
                // Antwort 2
                "brennbar",
                // Antwort 3
                "leichter als Luft",
                // Antwort 4
                "giftig (Blut- und Nervengift)",
                [true, true, true, true],
                // Bild
                ""],

            [// Frage 5
                "Welche Aussagen über Kohlenmonoxid sind richtig?",
                // Antwort 1
                "schwerer als Luft",
                // Antwort 2
                "farb-, geruch- und geschmacklos",
                // Antwort 3
                "ungifig",
                // Antwort 4
                "entsteht bei vollkommener Verbrennung",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 6
                "Während des Löschangriffs (Außenangriff) entdecken Sie eine leblose Person. Welchen der folgenden Schritte führen Sie zusammen mit ihrem Truppmann im Rahmen der Patientenkontrolle aus Sicht der Ersten Hilfe vorrangig durch?",
                // Antwort 1
                "Zuerst Bewusstsein, dann Atmung kontrollieren",
                // Antwort 2
                "Beine und Arme hochlagern",
                // Antwort 3
                "Zuerst Blutung stillen, dann Atmung kontrollieren",
                // Antwort 4
                "Zuerst Feuer löschen, dann Verletzten betreuen",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 7
                "Welche Aussagen über Kohlendioxid sind zutreffend?",
                // Antwort 1
                "entsteht bei unvollkommener Verbrennung",
                // Antwort 2
                "brennbar",
                // Antwort 3
                "leichter als Luft",
                // Antwort 4
                "steuert die Atmung, ist bei zu hoher Konzentration giftig",
                [false, false, false, true],
                // Bild
                ""],

            [// Frage 8
                "Welche Aussagen über Kohlendioxid sind zutreffend?",
                // Antwort 1
                "schwerer als Luft",
                // Antwort 2
                "farb-, geruch- und geschmacklos",
                // Antwort 3
                "ungifig",
                // Antwort 4
                "entsteht bei vollkommener Verbrennung",
                [true, true, false, true],
                // Bild
                ""],

            [// Frage 9
                "Welche Gefahren entstehen in dieser Situation?",
                // Antwort 1
                "Ausrutschen",
                // Antwort 2
                "Stolpern",
                // Antwort 3
                "Quetschen",
                // Antwort 4
                "Stürzen",
                [true, true, true, true],
                // Bild
                "Bild1.png"],

            [// Frage 10
                "Kreuzen Sie die zur GAMS-Regel gehörenden Begriffe an",
                // Antwort 1
                "Motoren warten",
                // Antwort 2
                "Absperren, absichern",
                // Antwort 3
                "Alarmieren",
                // Antwort 4
                "Grundsätze erklären",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 11
                "Kreuzen Sie die zur GAMS-Regel gehörenden Begriffe an",
                // Antwort 1
                "Spezialkräfte anfordern",
                // Antwort 2
                "Spitzenkräfte anfordern",
                // Antwort 3
                "Gefahr erkennen",
                // Antwort 4
                "Menschenrettung",
                [true, false, true, true],
                // Bild
                ""],

            [// Frage 12
                "Sie erhalten als Truppführer den Auftrag, eine Saugleitung aufzubauen. Warum soll in fließenden Gewassern der Saugkorb im Regelfall gegen die Fließrichtung des Wassers liegen? Kreuzen Sie die richtigen Antworten an.",
                // Antwort 1
                "In dieser Stellung wird die Bildung eines Wasserstrudels (Luftsogs) und damit Ansaugschwierigkeiten vermieden",
                // Antwort 2
                "Damit die Pumpe besser ansaugt, weil das Wasser in den Saugkorb gedrückt wird",
                // Antwort 3
                "Die Saugleitung kann in dieser Stellung besser gehalten werden",
                // Antwort 4
                "Damit der Schmutz am Saugkorb leichter weggespült wird",
                [true, true, false, false],
                // Bild
                ""],

            [// Frage 13
                "Worauf achten Sie bei der Entnahme von Geräten aus den Fahrzeug-Geräteräumen?",
                // Antwort 1
                "Dass die Geräteschlitten zur schnelleren Wiederbeladung im ausgezogenen Zustand belassen werden",
                // Antwort 2
                "Dass schwere Geräte von mehreren Einsatzkräften getragen werden",
                // Antwort 3
                "Dass die Aufstiegshilfen (Haltegriffe, Trittbretter, Leitern usw.) benutzt werden",
                // Antwort 4
                "Auf Verletzungsgefahren",
                [false, true, true, true],
                // Bild
                ""],

            [// Frage 14
                "Welche der folgenden Feuerlöscher können bei Bränden fester Stoffe wirkungsvoll eingesetzt werden?",
                // Antwort 1
                "Kohlendioxidlöscher",
                // Antwort 2
                "Feuerlöscher mit Metallbrandpulver",
                // Antwort 3
                "Pulverlöscher mit Glutbrandpulver",
                // Antwort 4
                "Pulverlöscher mit Flammbrandpulver",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 15
                "Welche der folgenden Feuerlöscher können bei Bränden fester Stoffe wirkungsvoll eingesetzt werden?",
                // Antwort 1
                "Pulverlöscher mit Flammbrandpulver",
                // Antwort 2
                "Nasslöscher",
                // Antwort 3
                "Schaumlöscher",
                // Antwort 4
                "Pulverlöscher mit Glutbrandpulver",
                [false, true, true, true],
                // Bild
                ""],

            [// Frage 16
                "Welche der folgenden Feuerlöscher können bei Bränden flüssiger Stoffe wirkungsvoll eingesetzt werden?",
                // Antwort 1
                "Kohlendioxidlöscher",
                // Antwort 2
                "Feuerloscher mit Metallbrandpulver",
                // Antwort 3
                "Pulverlöscher mit ABC-Pulver",
                // Antwort 4
                "Nasslöscher",
                [true, false, true, false],
                // Bild
                ""],

            [// Frage 17
                "Welche der folgenden Feuerlöscher können bei Bränden flüssiger Stoffe wirkungsvoll eingesetzt werden?",
                // Antwort 1
                "Pulverlöscher mit BC-Brandpulver",
                // Antwort 2
                "Nasslöscher",
                // Antwort 3
                "Schaumlöscher",
                // Antwort 4
                "Kolendioxidlöscher",
                [true, false, true, true],
                // Bild
                ""],

            [// Frage 18
                "Was beachten Sie als Truppführer bei der Brandbekampfung?",
                // Antwort 1
                "Keinesfalls ein Gebäude betreten",
                // Antwort 2
                "Sicherheitsabstände zu elektrischen Anlagen einhalten",
                // Antwort 3
                "Wasserabgabe immer wieder stoppen, damit der Wasserdampf abziehen kann und die Entwicklung der Löscharbeiten kontrolliert werden kann",
                // Antwort 4
                "Ausreichende Schlauchreserve",
                [false, true, true, true],
                // Bild
                ""],

            [// Frage 19
                "Was beachten Sie als Truppführer bei der Brandbekampfung?",
                // Antwort 1
                "Auf eine doppelte Rückwegsicherung mit Schlauch und Feuerwehrleine beim Innenangriff",
                // Antwort 2
                "Die Position immer wieder wechseln, um den Brand von allen Seiten bekämpfen zu können",
                // Antwort 3
                "Gegen den Wind angreifen",
                // Antwort 4
                "",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 20
                "Sie bekommen den Auftrag eine Fahrzeugbatterie abzuklemmen. Welchen Pol klemmen Sie zuerst ab?",
                // Antwort 1
                "Den Minuspol",
                // Antwort 2
                "Den Pluspol",
                // Antwort 3
                "Bei modernen Fahrzeugen ist die Reihenfolge egal",
                // Antwort 4
                "Darf von der Feuerwehr nicht abgeklemmt werden",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 21
                "Bei einem Unfall laufen Betriebsstoffe aus. Womit können Sie kleinere Mengen ausgelaufenen Treibstoffs abdecken?",
                // Antwort 1
                "Wasser",
                // Antwort 2
                "Ölbindemittel",
                // Antwort 3
                "Erde",
                // Antwort 4
                "Sagespäne",
                [false, true, true, true],
                // Bild
                ""],

            [// Frage 22
                "Worauf ist beim Aufstellen einer Steckleiter zu achten?",
                // Antwort 1
                "Auf eine sichere Verriegelung der Sperrbolzen",
                // Antwort 2
                "Dass die Leiter nicht vor Fluchtwegen/Eingangstüren in Stellung gebracht wird",
                // Antwort 3
                "Dass immer alle 4 Leiterteile genutzt werden",
                // Antwort 4
                "Dass 3 Sprossen bzw. 1 m Überstand eingehalten werden, wenn keine andere Möglichkeit zum Festhalten besteht",
                [true, true, false, true],
                // Bild
                ""],

            [// Frage 23
                "Worauf ist beim Aufstellen einer Steckleiter zu achten?",
                // Antwort 1
                "Dass die Leiter bis zur Fensteroberkante reicht",
                // Antwort 2
                "Dass ein ausreichender Abstand zu spannungsführenden Teilen eingehalten wird",
                // Antwort 3
                "Dass der Untergrund waagrecht und tragfähig ist",
                // Antwort 4
                "Dass ein Anstellwinkel von ca. 85° eingehalten wird",
                [false, true, true, false],
                // Bild
                ""],

            [// Frage 24
                "Welche taktischen Einsatzgrundsätze beachten Sie als Truppführer?",
                // Antwort 1
                "Menschenrettung hat oberste Priorität",
                // Antwort 2
                "Erkannte Gefahren sofort melden",
                // Antwort 3
                "Truppweise geschlossen vorgehen",
                // Antwort 4
                "Rückzugsweg sichern",
                [true, true, true, true],
                // Bild
                ""],

            [// Frage 25
                "Welche taktischen Einsatzgrundsätze beachten Sie als Truppführer?",
                // Antwort 1
                "Spätestens ab der Rauchgrenze mit Wasser am Rohr vorgehen",
                // Antwort 2
                "Schaden so gering wie möglich halten",
                // Antwort 3
                "Immer kriechend vorgehen",
                // Antwort 4
                "Löschstrahl nicht unterbrechen",
                [true, true, false, false],
                // Bild
                ""],

            [// Frage 26
                "Der Wassertrupp bekommt den Auftrag, ein Gebäude (rauchfrei) nach Personen zu durchsuchen. Wer legt die Reihenfolge der Absuche fest, wenn im Befehl des Gruppenführers kein Hinweis gegeben wurde?",
                // Antwort 1
                "Der dienstälteste Feuerwehrmann im Trupp",
                // Antwort 2
                "Der Truppführer",
                // Antwort 3
                "Der Truppmann",
                // Antwort 4
                "Der Maschinist",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 27
                "Der Einheitsführer befiehlt, dass Sie mit lhrem Trupp den nächsten Hydranten als Wasserversorgung einsatzbereit machen sollen. In etwa 25 m Entfernung zur Einsatzstelle entdecken Sie einen Unterflurhydranten, auf dem das im Bild dargestellte Fahrzeug parkt. In 100 m Entfernung sehen Sie einen Überflurhydranten <br> - wie entscheiden Sie sich?",
                // Antwort 1
                "Wir rutschen das Fahrzeug zur Seite und machen den Unterflurhydranten einsatzbereit. Als Feuerwehrmann darf ich Sachen, die den Einsatz behindern, entfernen",
                // Antwort 2
                "Weil bei allen Einsatzmaßnahmen die Verhältnismäßigkeit zu beachten ist, entscheide ich mich für den Überflurhydranten, auch wenn es etwas länger dauert",
                // Antwort 3
                "Ich weise die Polizei an, den Fahrzeughalter ausfindig zu machen und das Entfernen des Fahrzeuges zu veranlassen",
                // Antwort 4
                "",
                [false, true, false, false],
                // Bild
                "Bild3.png"],

            [// Frage 28
                "Beim Überqueren von Straßen mit Schlauchleitungen sind mindestens drei Schlauchbrücken auf einer Fahrbahnseite so auszulegen, dass Fahrzeuge verschiedener Spurbreite (PKW/LKW) die Schlauchleitung überfahren können. Der Truppführer achtet darauf, dass die Schlauchbrücken fachgerecht verlegt werden. Wie groß wählen sie den Abstand?",
                // Antwort 1
                "Etwa 2,5 m",
                // Antwort 2
                "Etwa 1,0 m",
                // Antwort 3
                "Etwa 1,5 m",
                // Antwort 4
                "Etwa 3,0 m",
                [false, true, false, false],
                // Bild
                "Bild2.png"],

            [// Frage 29
                "Der Truppführer ist für die genaue Lage des Verteilers verantwortlich. Wo sollten Sie nach Möglichkeit den Verteiler nicht ablegen?",
                // Antwort 1
                "Im Trümmerschatten",
                // Antwort 2
                "Im Schließbereich der Haustür",
                // Antwort 3
                "Außerhalb des Fluchtwegs",
                // Antwort 4
                "",
                [true, true, false, false],
                // Bild
                ""],

            [// Frage 30
                "Als Truppführer sind Sie für die Sicherheit des Trupps verantwortlich. Welche Grundsätze beachten Sie dabei beim Auftreten atomarer Gefahren?",
                // Antwort 1
                "Abstand halten",
                // Antwort 2
                "Abschirmungen nutzen",
                // Antwort 3
                "Aufenthaltsdauer begrenzen",
                // Antwort 4
                "Inkorporation ausschließen",
                [true, true, true, true],
                // Bild
                ""],

            [// Frage 31
                "Sie haben den Auftrag, eine brennende Scheune (Holzbauweise) abzulöschen. Worauf weisen sie lhren Truppmann bei der Strahlrohrführung hin?",
                // Antwort 1
                "Verbindungsstellen (Knotenpunkte) zuerst ablöschen",
                // Antwort 2
                "Verbindungsstellen (Knotenpunkte) zuletzt ablöschen",
                // Antwort 3
                "Stützen zuerst ablöschen",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 32
                "Wer bestimmt bei Einsatz von Wasser als Löschmittel, ob der Trupp die Brandbekämpfung mit Vollstrahl oder Sprühstrahl durchführt?",
                // Antwort 1
                "Der Truppmann",
                // Antwort 2
                "Der Strahlrohrführer",
                // Antwort 3
                "Der Truppführer",
                // Antwort 4
                "",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 33
                "Ein Feuerwehrmann wird durch den Schlauchtrupp mit Hilfe einer Feuerwehrleine gegen Absturz gesichert.<br>Wer überprüft die korrekte Ausführung des Brustbundes?",
                // Antwort 1
                "Der Truppmann des Schlauchtrupps",
                // Antwort 2
                "Der Feuerwehrdienstleistende, der den Knoten angelegt hat",
                // Antwort 3
                "Der Truppführer des Schlauchtrupps",
                // Antwort 4
                "",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 34
                "Welchen Vorteil hat die festgelegte Sitzordnung im Löschfahrzeug?",
                // Antwort 1
                "Ermöglicht schon während der Anfahrt, sich auf die entsprechenden Tätigkeiten vorzubereiten",
                // Antwort 2
                "Dient dem militärischen Drill",
                // Antwort 3
                "Keinen",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 35
                "Welche besonderen Aufgaben hat der Truppführer bei Anwendung der Unfallverhütungsvorschriften?",
                // Antwort 1
                "Der Truppführer ist für die Sicherheit des Trupps und damit für die Einhaltung der Unfallverhütungsvorschrift verantwortlich",
                // Antwort 2
                "Keine, weil Truppmann und Truppführer jeweils für sich selbst verantwortlich sind",
                // Antwort 3
                "Keine, weil Truppmann und Truppführer das Gleiche tun",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 36
                "Muss der Truppführer seinem Truppmann bei der Brandbekämpfung Weisungen erteilen?",
                // Antwort 1
                "Ja, vorallem, wenn der Truppmann nicht einsatztaktisch richtig oder nicht sicherheitsgerecht vorgeht",
                // Antwort 2
                "Nein, der Truppmann muss wissen, was zu tun ist",
                // Antwort 3
                "Ja, wenn er dienstälter ist",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 37
                "Der Truppführer bemerkt, dass sein Truppmann die Schläuche falsch auslegt. Muss der Truppführer etwas tun? Wenn ja, was?",
                // Antwort 1
                "Er muss den Truppmann auf das fachgerechte Auslegen hinweisen und überwachen, dass er die Hinweise beachtet",
                // Antwort 2
                "Er muss nichts veranlassen, weil noch nichts passiert ist und wenn, ware es Aufgabe des Gruppenführers, etwas zu sagen",
                // Antwort 3
                "Er muss nichts tun, denn der Truppmann hat das Auslegen ja in seiner Ausbildung gelernt und muss jetzt seine Erfahrungen selbst machen",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 38
                "Wer entscheidet, ob der Einsatzauftrag abgebrochen wird?",
                // Antwort 1
                "Der Truppführer",
                // Antwort 2
                "Der Maschinist",
                // Antwort 3
                "Der Truppmann",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 39
                "Während der Brandbekämpfung entdecken Sie eine leblose Person. Wie verhalten Sie sich richtig?",
                // Antwort 1
                "Gemäß meinem Auftrag hat die Brandbekämpfung Vorrang. Um die Person kann ich mich erst später kümmern",
                // Antwort 2
                "Ich lösche weiter und schicke meinen Truppmann zum Gruppenführer, um Meldung zu machen",
                // Antwort 3
                "Ich bringe die Person unverzüglich aus dem unmittelbaren Gefahrenbereich und leiste Erste Hilfe",
                // Antwort 4
                "Ich informiere schnellstmöglich meinen Gruppenführer",
                [false, false, true, true],
                // Bild
                ""],

            [// Frage 40
                "Welche Verhaltensweise ist nach psychisch belastenden Einsätzen vorteilhaft?",
                // Antwort 1
                "Nur keine Schwache zeigen",
                // Antwort 2
                "Nach dem Einsatz zusammensetzen, miteinander reden und evtl. PSNV hinzuziehen",
                // Antwort 3
                "So schnell wie möglich nach Hause gehen",
                // Antwort 4
                "",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 41
                "Wie wird die Rottungsgasse auf einer Autobahn mit 3 Fahrstreifen gebildet?",
                // Antwort 1
                "Die Fahrzeuge auf der linken Spur ganz nach links, alle anderen rechts",
                // Antwort 2
                "Genau in der Mitte freimachen",
                // Antwort 3
                "Auf demn Standstreffen",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 42
                "Was tun Sie als Truppführer, wenn ihr Truppmann im Einsatz plőtzlich psychische Probleme hat?",
                // Antwort 1
                "Ihn aus dem Einsatzgeschehen herausnehmen, betreuen und den Einheitsführer informieren",
                // Antwort 2
                "Nicht weiter beachten",
                // Antwort 3
                "Ihm verdeutlichen, dass das Feuerwehrgeschaft eben kein Zuckerschlecken ist",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 43
                "Wie wird in der Regel bei einem Wohnungsbrand vorgegangen?",
                // Antwort 1
                "Truppweise unter Atemschutz",
                // Antwort 2
                "Mit Strahlrohr von außen die Dachhaut kühlen",
                // Antwort 3
                "Der Truppmann geht mit CM-Strahlrohr in die Wohnung",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 44
                "Was ist beim Unterbauen und Stabilisieren des im Bild gezeigten Unfallfahrzeugs (Pkw) vor einer Personenbefreiung zu beachten?",
                // Antwort 1
                "Es muss nicht unterbaut werden",
                // Antwort 2
                "Es reicht aus die A-Säule zu unterbauen",
                // Antwort 3
                "Es muss mindestens an A- und B-Säule unterbaut werden",
                // Antwort 4
                "Es muss gegen Wegrollen gesichert werden",
                [false, false, true, true],
                // Bild
                "Bild4.png"],

            [// Frage 45
                "Was darf bei Branden der Brandklasse D nicht als Lőschmittel verwendet werden?",
                // Antwort 1
                "Sand",
                // Antwort 2
                "D-Loschpulver",
                // Antwort 3
                "Zement",
                // Antwort 4
                "Wasser",
                [false, false, false, true],
                // Bild
                ""],

            [// Frage 46
                "Welche grundsátzlichen Aufgaben űbernimmt der Angriffstrupp einer Gruppe im Löscheinsatz?",
                // Antwort 1
                "Er hat keine bestimmten Aufgaben",
                // Antwort 2
                "Er arbeitet ausschließlich nach Anweisung des Einsatzleisters",
                // Antwort 3
                "Er rettet und nimmt das erste Rohr vor",
                // Antwort 4
                "Er verlegt die C-Leitung ab dem Verteiler selbst",
                [false, false, true, true],
                // Bild
                ""],

            [// Frage 47
                "Wo liegt die erste Absperrgrenze bei einem Einsatz mit unbekannten ABC-Gefahrstoffen (Absperrgrenze des Gefahrenbereichs)?",
                // Antwort 1
                "Mindestens 5 m",
                // Antwort 2
                "Mindestens 15 m",
                // Antwort 3
                "Mindestens 50 m",
                // Antwort 4
                "Mindestens 20 m",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 48
                "Wie viele Einsatzkräfte sind nach FwDV 10 notwendig, um eine Steckleiter aufzubauen?",
                // Antwort 1
                "Mindestens zwei Trupps und ein Gruppen- oder Staffelführer (5 Personen)",
                // Antwort 2
                "Zwei Trupps (4 Personen). Die Fuhrung übernimmt einer der beiden Truppführer",
                // Antwort 3
                "3 Personen (1 Truppführer + 2 Truppmanner) sind die Mindestanzahl",
                // Antwort 4
                "Ein Trupp. Die Fahrung übernimmt der Truppführer",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 49
                "Sie haben selbstständig einen anderen Hydranten verwendet, da der vom Gruppenführer benannte Unterflurhydrant durch einen Kleintransporter verstellt war. Was ist zu tun?",
                // Antwort 1
                "Den Gruppenführer umgehend über die geänderte Lage informieren",
                // Antwort 2
                "Ohne vorherige Rücksprache mit dem Gruppenführer den anderen Hydranten nur verwenden, wenn sichergestellt ist, dass dadurch keine anderen Kräfte in lhrer Tätigkeit behindert werden",
                // Antwort 3
                "Sobald der PKW-Fahrer ausfindig gemacht werden konnte und sein Fahrzeug entfernt hat, den Schlauch auf den richtigen Hydranten umkuppeln",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],

            [// Frage 50
                "Sie sind mit einem LF 20 im Brandeinsatz. Während der Brandbekämpfung im EG ruft plötzlich im 3. Obergeschoss eine Person um Hilfe, weil das Treppenhaus verraucht ist. Mit welcher Ausstattung des LF 20 können Sie die Person aus dem 3. Obergeschoss retten?",
                // Antwort 1
                "4-teilige Steckleiter",
                // Antwort 2
                "3-teilige Schiebleiter",
                // Antwort 3
                "Klappleiter",
                // Antwort 4
                "5-teilige Steckleiter",
                [false, true, false, false],
                // Bild
                ""],

            [// Frage 51
                "Zu den allgemeinen Aufgaben des Truppführers gehören beispielsweise:",
                // Antwort 1
                "Angriffsweg festlegen, soweit nicht durch den Einheitsführer vorgegeben",
                // Antwort 2
                "Kontrolle der persönlichen Schutzausrüstung (PSA)",
                // Antwort 3
                "Das taktische Funkkonzept festzulegen",
                // Antwort 4
                "Die Beachtung der Gefahren der Einsatzstelle",
                [true, true, false, true],
                // Bild
                ""],

            [// Frage 52
                "Richtiges Verhalten des Truppführers bei Erkennen einer Eigengefährdung ist,",
                // Antwort 1
                "sofortige Meldung an den Einheitsführer",
                // Antwort 2
                "wenn aufgrund der Gefahr erforderlich, tritt jeder im Trupp für s sich den Rückzug an",
                // Antwort 3
                "wenn aufgrund der Gefahr erforderlich, tritt der Trupp geschlossen den Rückweg an",
                // Antwort 4
                "ggf. Notfallmeldung - Kennwort: Mayday - absetzen",
                [true, false, true, true],
                // Bild
                ""],

            [// Frage 53
                "Wie reagieren Sie als Truppführer, wenn lhr Trupp den Auftrag hat 'Zur Brandbekämpfung auf der Gebäuderückseite vor!' und sehen den im Bild dargestellten Dachaufbau?",
                // Antwort 1
                "Meldung an den Einheitsführer 'Fotovoltaikanlage vorhanden!'",
                // Antwort 2
                "Strahlrohrabstand den Gefahren anpassen",
                // Antwort 3
                "Trupp vor herabstürzenden Teilen schützen",
                // Antwort 4
                "Keine besondere Reaktion erforderlich",
                [true, true, false, false],
                // Bild
                "Bild5.png"],

            [// Frage 54
                "Wann darf bei Unfällen in Hochspannungsanlagen mit der Menschenrettung begonnen werden?",
                // Antwort 1
                "In Hochspannungsanlagen darf die Feuerwehr nicht tätig werden",
                // Antwort 2
                "Menschenrettung kann immer durchgeführt werden, denn zur Menschenrettung kann von den Unfallverhütungsvorschriften abgewichen werden",
                // Antwort 3
                "Erst nach Abschaltung und Freigabe durch Fachpersonal",
                // Antwort 4
                "",
                [false, false, true, false],
                // Bild
                ""],

            [// Frage 55
                "Warnkleidung ist zu tragen",
                // Antwort 1
                "bei schlechten Sichtverhältnissen",
                // Antwort 2
                "bei Gefahrguteinsätzen",
                // Antwort 3
                "bei Tatigkeiten im Straßenyerkehr",
                // Antwort 4
                "bei entsprechender Anordnung des Gruppenführers",
                [true, false, true, true],
                // Bild
                ""],

            [// Frage 56
                "Der Gesichtsschutz zum Feuerwehrhelm (Klappvisier) ist zu verwenden",
                // Antwort 1
                "bei Gefahren für das Gesicht und die Augen",
                // Antwort 2
                "bei Gefahren beispielsweise durch Splitter",
                // Antwort 3
                "bei Gefahren durch wegschnellende Teile",
                // Antwort 4
                "bei Gefahren durch Funken oder Spritzer gefährlicher Stofe",
                [true, true, true, true],
                // Bild
                ""],

            [// Frage 57
                "Beim Aufstellen von tragbaren Leitern ist auf",
                // Antwort 1
                "den richtigen Anstellwinkel von ca. 65° bis 75 (mit angewinkeltem Arm prüfen) zu achten",
                // Antwort 2
                "erforderliche Mindestabstände zu elektrischen Freileitungen zu achten",
                // Antwort 3
                "einen ausreichend festen Untergrund zu achten",
                // Antwort 4
                "einen sicheren Stand zu achten",
                [true, true, true, true],
                // Bild
                ""],

            [// Frage 58
                "Die Feuerwehrleine ...",
                // Antwort 1
                "dient zum Einfangen von Tieren (daher die frühere Bezeichnung: 'Fangleine'!)",
                // Antwort 2
                "dient als Halte- und Ventilleine",
                // Antwort 3
                "ist ein Rettungsgerät, das zur ergänzenden persönlichen Ausrüstung gehört",
                // Antwort 4
                "dient zum Sichern von Personen",
                [false, false, true, true],
                // Bild
                ""],

            [// Frage 59
                "Folgende Hinweise zur Sicherheit sind beim Einsatz einer Brechstange zu beachten:",
                // Antwort 1
                "Beim Einsatz der Brechstange ist Gesichtsschutz zu verwenden",
                // Antwort 2
                "Beim Einsatz ist die Klaue nicht zum Stoßen zu benutzen",
                // Antwort 3
                "Beim Heben muss die Last durch Unterbauen gesichert werden",
                // Antwort 4
                "Das maximal anzuhebende Gewicht darf nicht mehr als 10 kg betragen",
                [true, true, true, false],
                // Bild
                ""],

            [// Frage 60
                "Beim Einsatz des Einreißhakens",
                // Antwort 1
                "ist Gesichtsschutz erforderlich",
                // Antwort 2
                "kann generell auf Grundsätze, die einer Unfallverhutung dienen, verzichtet werden",
                // Antwort 3
                "sind Unterlegkeile zu verwenden",
                // Antwort 4
                "",
                [true, false, false, false],
                // Bild
                ""],
            ],
            fehler: 0,
            index: 0,
        }
    },
    methods: {
        startGame: function () {
            console.log(this.refsList);
            this.index = 0;
            this.fehler = 0;
            this.fragen = this.shuffle(this.fragen);
            //this.$refs["Aufgabe"].innerHTML = "Aufgabe: 1" + "/" + this.fragen.length.toString();
            this.setFields();
        },
        setFields: function () {
            this.$refs["Antwort1"].style.backgroundColor = "white";
            this.$refs["Antwort2"].style.backgroundColor = "white";
            this.$refs["Antwort3"].style.backgroundColor = "white";
            this.$refs["Antwort4"].style.backgroundColor = "white";
            this.$refs["buttonWeiter"].hidden = true;
            this.$refs["buttonAbschicken"].hidden = false;
            this.$refs["Frage"].innerHTML = this.fragen[this.index][0];
            this.$refs["checkbox1Label"].innerHTML = this.fragen[this.index][1];
            this.$refs["checkbox2Label"].innerHTML = this.fragen[this.index][2];
            this.$refs["checkbox3Label"].innerHTML = this.fragen[this.index][3];
            if (this.fragen[this.index][4] != "") {
                this.$refs["checkbox4"].hidden = false;
                this.$refs["checkbox4Label"].hidden = false;
                this.$refs["checkbox4Label"].innerHTML = this.fragen[this.index][4];
            } else {
                this.$refs["checkbox4"].hidden = true;
                this.$refs["checkbox4Label"].hidden = true;
            }
            if (this.fragen[this.index][6] != "") {
                this.$refs["Bild"].hidden = false;
                this.$refs["Bild"].src = require(this.fragen["../assets/MTA2/" + this.index[6]]);
            } else {
                this.$refs["Bild"].hidden = true;
            }
        },
        checkAnswer: function () {
            var falsch = false;
            for (let i = 0; i < 4; i++) {
                console.log(i);
                console.log(this.$refs["checkbox" + (+i+1).toString()]);
                if (this.$refs["checkbox" + (+i + 1).toString()].checked == this.fragen[this.index][5][i]) {
                    this.$refs["Antwort" + (+i + 1).toString()].style.backgroundColor = "green";
                } else {
                    falsch = true;
                    this.$refs["Antwort" + (+i + 1).toString()].style.backgroundColor = "red";
                }
            }
            if (falsch) {
                this.fehler++;
            }
            this.$refs["buttonWeiter"].hidden = false;
            this.$refs["buttonAbschicken"].hidden = true;
        },
        next: function () {
            if (this.index < this.fragen.length - 1) {
                this.index++;
                this.$refs["checkbox1"].checked = false;
                this.$refs["checkbox2"].checked = false;
                this.$refs["checkbox3"].checked = false;
                this.$refs["checkbox4"].checked = false;
                this.$refs["Aufgabe"].innerHTML = "Aufgabe: " + (+this.index + +1).toString() + "/" + this.fragen.length.toString();
                this.setFields();
            } else {
                if (this.fehler == 0) {
                    Swal.fire({
                        title: 'fehlerfrei',
                        text: 'Du hast alle ' + this.fragen.length.toString() + ' richtig beantwortet.',
                        icon: 'success',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                } else if (this.fehler <= 2) {
                    Swal.fire({
                        title: 'Naja',
                        text: 'Du hast ' + (+this.fragen.length - +this.fehler).toString() + ' von ' + this.fragen.length.toString() + ' richtig beantwortet.',
                        icon: 'warning',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                } else if (this.fehler >= 3) {
                    Swal.fire({
                        title: 'Übungsbedarf',
                        text: 'Du hast nur ' + (+this.fragen.length - +this.fehler).toString() + ' von ' + this.fragen.length.toString() + ' richtig beantwortet.',
                        icon: 'error',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                }
                this.startGame();
            }
        },
        shuffle: function (array) {
            let counter = array.length;

            // While there are elements in the array
            while (counter > 0) {
                // Pick a random this.index
                let index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                let temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }

            return array;
        }
    },
    created(){
        //this.startGame();
    }
}
</script>

<style lang="scss">
#mta2 {
    margin-top: 4.5rem;
    height: 72vh;
    overflow-y: scroll;
}
</style>