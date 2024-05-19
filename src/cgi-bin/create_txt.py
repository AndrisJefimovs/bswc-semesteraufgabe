def create_txt(entries):
    if not "packages" in entries:
        return "missing 'packages' field"
    if not "c" in entries:
        return "missing 'c' field"
    if not "r" in entries:
        return "missing 'r' field"

    res = ""

    for entry in entries["packages"]:
        res += entry["name"]
    for entry in entries["c"]:
        res += "c"
    for entry in entries["r"]:
        res += "r"

    return res

