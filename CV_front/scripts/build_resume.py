"""Regenerate the downloadable résumé after editing the content below."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "Josh-Andrew-Esmade-Resume.pdf"
INK = colors.HexColor("#243B36")
MUTED = colors.HexColor("#53655D")
ACCENT = colors.HexColor("#256153")
LINE = colors.HexColor("#CBD1C4")

name = "Josh Andrew Esmade"
role = "Developer & Computer Science Graduate"
contact = "Philippines  |  jaesmade@gmail.com  |  github.com/jaesmade"
profile = (
    "Computer Science graduate specializing in Intelligent Systems from Laguna State "
    "Polytechnic University. Builds practical software, web experiences, and intelligent "
    "applications with a focus on clean interfaces and useful outcomes."
)
education = (
    "Bachelor of Science in Computer Science, Major in Intelligent Systems",
    "Laguna State Polytechnic University",
)
projects = [
    (
        "SkillDis",
        "Inclusive intelligent job matching for PWD job seekers, using skills, experience, "
        "and accessibility requirements.  PHP · MySQL · JavaScript · NLP",
    ),
    (
        "Hitovest",
        "Catfish farming management with biomass forecasting, water quality monitoring, "
        "and production tools.  Python · Decision Tree · Sensors",
    ),
    (
        "Smart Irrigation System",
        "Automated irrigation using sensors and environmental monitoring to support "
        "better water management.  Arduino · IoT · C++",
    ),
]
skills = (
    "HTML · CSS · JavaScript · React · PHP · Python · MySQL · Node.js · Git · Figma · "
    "Arduino · Machine Learning · NLP · UI/UX Design"
)

styles = {
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=22, leading=26,
        textColor=INK, alignment=TA_CENTER, spaceAfter=4,
    ),
    "role": ParagraphStyle(
        "role", fontName="Helvetica", fontSize=10.5, leading=14,
        textColor=ACCENT, alignment=TA_CENTER, spaceAfter=4,
    ),
    "contact": ParagraphStyle(
        "contact", fontName="Helvetica", fontSize=8.5, leading=12,
        textColor=MUTED, alignment=TA_CENTER, spaceAfter=15,
    ),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=10.5, leading=14,
        textColor=ACCENT, spaceBefore=15, spaceAfter=7,
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9.5, leading=14,
        textColor=INK,
    ),
    "item": ParagraphStyle(
        "item", fontName="Helvetica-Bold", fontSize=9.5, leading=13,
        textColor=INK, spaceAfter=2,
    ),
    "detail": ParagraphStyle(
        "detail", fontName="Helvetica", fontSize=9.2, leading=13.5,
        textColor=MUTED,
    ),
}


def section(title):
    return [Paragraph(title.upper(), styles["section"]), HRFlowable(width="100%", thickness=0.7, color=LINE), Spacer(1, 7)]


story = [
    Paragraph(name, styles["name"]),
    Paragraph(role, styles["role"]),
    Paragraph(contact, styles["contact"]),
]
story += section("Profile")
story.append(Paragraph(profile, styles["body"]))
story += section("Education")
story.append(Paragraph(education[0], styles["item"]))
story.append(Paragraph(education[1], styles["detail"]))
story += section("Selected projects")
for title, detail in projects:
    story.append(KeepTogether([
        Paragraph(title, styles["item"]),
        Paragraph(detail, styles["detail"]),
        Spacer(1, 10),
    ]))
story += section("Skills")
story.append(Paragraph(skills, styles["body"]))

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=48, leftMargin=48,
    topMargin=46, bottomMargin=46,
    title=f"{name} - Résumé", author=name,
)
doc.build(story)
print(OUTPUT)
