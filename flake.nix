{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system} = {
        default =
          let
            cv-watch = pkgs.writeShellScriptBin "cv_watch" ''
              typst watch ./cv.typ ./public/cv.pdf
            '';
          in
          pkgs.mkShell
            {
              buildInputs = with pkgs;[
                bun
                typescript
                typst
                cv-watch
              ];
            };
      };
    };
}
