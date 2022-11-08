<?php

namespace App\Http\Controllers;

use App\Models\Laptime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LapTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Pilote' => 'required',
            'Circuit'=> 'required',
            'Voiture' => 'required',
            'Temps' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors());
        }
        $laptime = Laptime::create($input);
        return response()->json([
            'success' => true,
            'message' => 'Laptime record created successfully',
            'laptime' => $laptime
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Laptime::where('id', $id)->exists()) {
            $laptime = Laptime::find($id);
            $laptime->Pilote = $request->Pilote;
            $laptime->Circuit = $request->Circuit;
            $laptime->Voiture = $request->Voiture;
            $laptime->Temps = $request->Temps;
            $laptime->save();
            return response()->json([
                'message' => 'Temps enregistré avec succès'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Temps non trouvé, impossible de mettre à jour'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Laptime::where('id', $id)->exists()){
            $laptime = Laptime::find($id);
            $laptime->delete();
            return response()->json([
                'message' => 'Temps supprimé avec succès'
            ]);
        } else {
            return response()->json([
                'message' => 'Temps non trouvé, impossible de supprimer'
            ], 404);
        }
    }
}
