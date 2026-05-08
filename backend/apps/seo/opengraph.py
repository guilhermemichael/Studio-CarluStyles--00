def build_og_payload(title: str, description: str, image_url: str = "") -> dict:
    return {
        "title": title,
        "description": description,
        "image": image_url,
        "type": "website",
    }
