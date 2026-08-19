Was gewinnen wir mit dem Commit-Hook?
Durch den Commit-Hook stellen wir sicher, dass alle Commit-Nachrichten einheitlich nach Conventional Commits aufgebaut sind und eine Ticketnummer enthalten. Dadurch lassen sich Änderungen besser nachvollziehen und einem Ticket zuordnen.

Welche Probleme seht ihr mit dieser Lösung?
Der Hook funktioniert nur, wenn er bei jedem Entwickler korrekt eingerichtet wurde, zum Beispiel mit "npm install". Außerdem kann ein lokaler Git-Hook grundsätzlich umgangen werden. Zum Beispiel mit git commit "--no-verify".