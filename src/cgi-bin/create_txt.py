#String-Format: "{Art} {Name} von {min_version} bis {max_version}"
def create_txt(requirements: list[str]) -> None:
  final_command = ""
  for req in requirements:
    commands = req.split(" ")
    name = commands[1]
    min_ver = commands[3]
    max_ver = commands[5]
    final_command += name
    #min_ver cant be greater than max_ver"
    if min_ver != "" and max_ver == "":
        final_command += f" >= {min_ver}"
    elif min_ver == "" and max_ver != "":
        final_command += f" <= {max_ver}"
    elif min_ver != "" and min_ver == max_ver:
        final_command += f" == {min_ver}"
    elif min_ver != "" and max_ver != "":
        final_command += f" >= {min_ver}, <= {max_ver}"
    final_command += "\n"
  with open("src/cgi-bin/requirements.txt", "w") as file:
    file.write(final_command)

example = ["NAME SomeProject von 1.2 bis 2.3", "NAME numpy von 0.9 bis 2.3.17", "NAME beautifulsoup4 von  bis ", "NAME yummy von 2 bis 2", "NAME os von 10.9.28 bis 10.9.29"]

create_txt(example)