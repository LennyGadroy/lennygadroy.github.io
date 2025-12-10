<?php
$destinataire = "lennygadroy@gmail.com";
if ($_SERVER["REQUEST_METHOD"] == "post") {

    $nom = isset($_POST['nom']) ? strip_tags(trim($_POST['nom'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $objet = isset($_POST['objet']) ? strip_tags(trim($_POST['objet'])) : 'Nouveau message du Portfolio';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    if (empty($nom) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=error");
        exit;
    }

    $email_subject = "CONTACT PORTFOLIO : $objet";    
    $email_content = "Nouveau message reçu via le terminal de contact.\n\n";
    $email_content .= "Nom: $nom\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $nom <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinataire, $email_subject, $email_content, $headers)) {
        header("Location: contact.html?status=success");
    } else {
        header("Location: contact.html?status=server_error");
    }
} else {
    header("Location: contact.html");
}
?>